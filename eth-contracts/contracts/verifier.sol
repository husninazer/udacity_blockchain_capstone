// This file is MIT Licensed.
//
// Copyright 2017 Christian Reitwiessner
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

pragma solidity >=0.4.14;
library Pairing {
    struct G1Point {
        uint X;
        uint Y;
    }
    // Encoding of field elements is: X[0] * z + X[1]
    struct G2Point {
        uint[2] X;
        uint[2] Y;
    }
    /// @return the generator of G1
    function P1() pure internal returns (G1Point memory) {
        return G1Point(1, 2);
    }
    /// @return the generator of G2
    function P2() pure internal returns (G2Point memory) {
        return G2Point(
            [11559732032986387107991004021392285783925812861821192530917403151452391805634,
             10857046999023057135944570762232829481370756359578518086990519993285655852781],
            [4082367875863433681332203403145435568316851327593401208105741076214120093531,
             8495653923123431417604973247489272438418190587263600148770280649306958101930]
        );
    }
    /// @return the negation of p, i.e. p.addition(p.negate()) should be zero.
    function negate(G1Point memory p) pure internal returns (G1Point memory) {
        // The prime q in the base field F_q for G1
        uint q = 21888242871839275222246405745257275088696311157297823662689037894645226208583;
        if (p.X == 0 && p.Y == 0)
            return G1Point(0, 0);
        return G1Point(p.X, q - (p.Y % q));
    }
    /// @return the sum of two points of G1
    function addition(G1Point memory p1, G1Point memory p2) internal returns (G1Point memory r) {
        uint[4] memory input;
        input[0] = p1.X;
        input[1] = p1.Y;
        input[2] = p2.X;
        input[3] = p2.Y;
        bool success;
        assembly {
            success := call(sub(gas, 2000), 6, 0, input, 0xc0, r, 0x60)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }
        require(success);
    }
    /// @return the product of a point on G1 and a scalar, i.e.
    /// p == p.scalar_mul(1) and p.addition(p) == p.scalar_mul(2) for all points p.
    function scalar_mul(G1Point memory p, uint s) internal returns (G1Point memory r) {
        uint[3] memory input;
        input[0] = p.X;
        input[1] = p.Y;
        input[2] = s;
        bool success;
        assembly {
            success := call(sub(gas, 2000), 7, 0, input, 0x80, r, 0x60)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }
        require (success);
    }
    /// @return the result of computing the pairing check
    /// e(p1[0], p2[0]) *  .... * e(p1[n], p2[n]) == 1
    /// For example pairing([P1(), P1().negate()], [P2(), P2()]) should
    /// return true.
    function pairing(G1Point[] memory p1, G2Point[] memory p2) internal returns (bool) {
        require(p1.length == p2.length);
        uint elements = p1.length;
        uint inputSize = elements * 6;
        uint[] memory input = new uint[](inputSize);
        for (uint i = 0; i < elements; i++)
        {
            input[i * 6 + 0] = p1[i].X;
            input[i * 6 + 1] = p1[i].Y;
            input[i * 6 + 2] = p2[i].X[0];
            input[i * 6 + 3] = p2[i].X[1];
            input[i * 6 + 4] = p2[i].Y[0];
            input[i * 6 + 5] = p2[i].Y[1];
        }
        uint[1] memory out;
        bool success;
        assembly {
            success := call(sub(gas, 2000), 8, 0, add(input, 0x20), mul(inputSize, 0x20), out, 0x20)
            // Use "invalid" to make gas estimation work
            switch success case 0 { invalid() }
        }
        require(success);
        return out[0] != 0;
    }
    /// Convenience method for a pairing check for two pairs.
    function pairingProd2(G1Point memory a1, G2Point memory a2, G1Point memory b1, G2Point memory b2) internal returns (bool) {
        G1Point[] memory p1 = new G1Point[](2);
        G2Point[] memory p2 = new G2Point[](2);
        p1[0] = a1;
        p1[1] = b1;
        p2[0] = a2;
        p2[1] = b2;
        return pairing(p1, p2);
    }
    /// Convenience method for a pairing check for three pairs.
    function pairingProd3(
            G1Point memory a1, G2Point memory a2,
            G1Point memory b1, G2Point memory b2,
            G1Point memory c1, G2Point memory c2
    ) internal returns (bool) {
        G1Point[] memory p1 = new G1Point[](3);
        G2Point[] memory p2 = new G2Point[](3);
        p1[0] = a1;
        p1[1] = b1;
        p1[2] = c1;
        p2[0] = a2;
        p2[1] = b2;
        p2[2] = c2;
        return pairing(p1, p2);
    }
    /// Convenience method for a pairing check for four pairs.
    function pairingProd4(
            G1Point memory a1, G2Point memory a2,
            G1Point memory b1, G2Point memory b2,
            G1Point memory c1, G2Point memory c2,
            G1Point memory d1, G2Point memory d2
    ) internal returns (bool) {
        G1Point[] memory p1 = new G1Point[](4);
        G2Point[] memory p2 = new G2Point[](4);
        p1[0] = a1;
        p1[1] = b1;
        p1[2] = c1;
        p1[3] = d1;
        p2[0] = a2;
        p2[1] = b2;
        p2[2] = c2;
        p2[3] = d2;
        return pairing(p1, p2);
    }
}
contract Verifier {
    using Pairing for *;
    struct VerifyingKey {
        Pairing.G2Point A;
        Pairing.G1Point B;
        Pairing.G2Point C;
        Pairing.G2Point gamma;
        Pairing.G1Point gammaBeta1;
        Pairing.G2Point gammaBeta2;
        Pairing.G2Point Z;
        Pairing.G1Point[] IC;
    }
    struct Proof {
        Pairing.G1Point A;
        Pairing.G1Point A_p;
        Pairing.G2Point B;
        Pairing.G1Point B_p;
        Pairing.G1Point C;
        Pairing.G1Point C_p;
        Pairing.G1Point K;
        Pairing.G1Point H;
    }
    function verifyingKey() pure internal returns (VerifyingKey memory vk) {
        vk.A = Pairing.G2Point([0x21f57a99638c874766e48e96bab7afe71ed8c012f3d46c746847e4467b75a841, 0x3260c6ba7c8eb6ad26937ae2ab949fc2896df78cdec338becad4fb8faa1759e], [0x1baf21d65f4c089381f05cf1dd617e501b7abff1ae4992078a14eb80d0e7cf6f, 0x1c395306aae2b0afae27f010b4f474234de6de376a5296ddf838c844c39930dd]);
        vk.B = Pairing.G1Point(0x2fc10c255ceeee749420c8869d88a932d75851a8b38ce5de7c3e3b0c570e1a68, 0xa2ee30d59e092d37dafa791e294c1bc67aa035b232bf022ab8ad998451bda16);
        vk.C = Pairing.G2Point([0x234ba5da33707cfed19346956e876aad7700f00e448d536371ba8b0e0f0a9a27, 0x243107dae84d28e89a44750954e7c0a79a0f36f9b3869bd954b14948e2e57e9e], [0x26dacb2e99754e8fa77bc2d51555c1e3d7055faf3a57579a5a12d212d5a16c57, 0x1d7b27a9ba3d58fe5d92b00a2c4e870fa1d0d881a6e03fbe8af3350bc608cabc]);
        vk.gamma = Pairing.G2Point([0x2ce7cbeab7b224319d5428a90efa04aaff9864b3dc55ed2036349ecd7857013a, 0x21f1096ee601f42cc5e5d786eb62050cc5c0385119f45487933e84f19ca4e820], [0x2692ac65bb405be01d40475747e05ba05a25d6b000cf9ded022324f7b88aa77, 0x1682109ffbfcb54c54ed5a7915a05e0e5299b0552d802b916218988009fe2871]);
        vk.gammaBeta1 = Pairing.G1Point(0x2979dfe5190e49bfcc9a4ec26a9eb38f6eb52a752322ec3cd7929de5412430f5, 0xb1aa6cfa14cfc7886bbf2e6f9bc8ec7a70242e71d78cde3f198602b963ed55b);
        vk.gammaBeta2 = Pairing.G2Point([0x1466d40f4377a447b550969e60dd759da7df66ff53144be697a907c2e44b43bf, 0x58367cff4a08911da1765b30df6adb84fc47caa084177de92f407cd84df7b1b], [0x14a0f3f582e5026f5ec5c02887984c5e9b18e63836ff6bfb8a0c447fc247e9ec, 0x6339b177ef321ced790336ed4c1eecd3ea13ad29f1bf88749e30c213a63dc7f]);
        vk.Z = Pairing.G2Point([0x27b608d5f54256c3b5ba17d7999881a43fee726469e6d5ac862eff81e7362d07, 0x2dbe9da7d3fdc284e7cd172b8164060ed0ba0a44184e7ee7c33ce12650ce71d3], [0x2aec5d5fa4c4c8fc22e4f35edcfee640e5423ca79b6c3dff91ee2f422c09a339, 0x2429161025e50c506093e4f68464bfb8febfbbd023aab2fbcf569962b1e3c810]);
        vk.IC = new Pairing.G1Point[](3);
        vk.IC[0] = Pairing.G1Point(0xa99b4ba93c29a4725828675d8daf06edfb20a2998d2cf26aa81d2a29f3a93a, 0xd2aaec82fa8743af2b0c8e3e9cb2370738dd2d27b037890ec41e42cbbadc849);
        vk.IC[1] = Pairing.G1Point(0x3cf1c70265f2a1306b352009a5d7e5da8189ae8845176d0b462a6aa0634316e, 0x2c11fce7a7335b22658625b7cf46c04ae0bcfd7a7fa84f0d99a93ef4aa97dd6c);
        vk.IC[2] = Pairing.G1Point(0x182fceeecf80e6d1b15ff4df12e58c24384e31b7d86d717a3e4453f5a01b029, 0x1cf74c2edaf326984d14b724f09fbbbde624043d857f23662c8ab41b4337c5d8);
    }
    function verify(uint[] memory input, Proof memory proof) internal returns (uint) {
        VerifyingKey memory vk = verifyingKey();
        require(input.length + 1 == vk.IC.length);
        // Compute the linear combination vk_x
        Pairing.G1Point memory vk_x = Pairing.G1Point(0, 0);
        for (uint i = 0; i < input.length; i++)
            vk_x = Pairing.addition(vk_x, Pairing.scalar_mul(vk.IC[i + 1], input[i]));
        vk_x = Pairing.addition(vk_x, vk.IC[0]);
        if (!Pairing.pairingProd2(proof.A, vk.A, Pairing.negate(proof.A_p), Pairing.P2())) return 1;
        if (!Pairing.pairingProd2(vk.B, proof.B, Pairing.negate(proof.B_p), Pairing.P2())) return 2;
        if (!Pairing.pairingProd2(proof.C, vk.C, Pairing.negate(proof.C_p), Pairing.P2())) return 3;
        if (!Pairing.pairingProd3(
            proof.K, vk.gamma,
            Pairing.negate(Pairing.addition(vk_x, Pairing.addition(proof.A, proof.C))), vk.gammaBeta2,
            Pairing.negate(vk.gammaBeta1), proof.B
        )) return 4;
        if (!Pairing.pairingProd3(
                Pairing.addition(vk_x, proof.A), proof.B,
                Pairing.negate(proof.H), vk.Z,
                Pairing.negate(proof.C), Pairing.P2()
        )) return 5;
        return 0;
    }
    event Verified(string s);
    function verifyTx(
            uint[2] memory a,
            uint[2] memory a_p,
            uint[2][2] memory b,
            uint[2] memory b_p,
            uint[2] memory c,
            uint[2] memory c_p,
            uint[2] memory h,
            uint[2] memory k,
            uint[2] memory input
        ) public returns (bool r) {
        Proof memory proof;
        proof.A = Pairing.G1Point(a[0], a[1]);
        proof.A_p = Pairing.G1Point(a_p[0], a_p[1]);
        proof.B = Pairing.G2Point([b[0][0], b[0][1]], [b[1][0], b[1][1]]);
        proof.B_p = Pairing.G1Point(b_p[0], b_p[1]);
        proof.C = Pairing.G1Point(c[0], c[1]);
        proof.C_p = Pairing.G1Point(c_p[0], c_p[1]);
        proof.H = Pairing.G1Point(h[0], h[1]);
        proof.K = Pairing.G1Point(k[0], k[1]);
        uint[] memory inputValues = new uint[](input.length);
        for(uint i = 0; i < input.length; i++){
            inputValues[i] = input[i];
        }
        if (verify(inputValues, proof) == 0) {
            emit Verified("Transaction successfully verified.");
            return true;
        } else {
            return false;
        }
    }
}
