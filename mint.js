const HDWalletProvider = require("truffle-hdwallet-provider")
const web3 = require('web3')
const MNEMONIC = "they pulp arctic fringe tide bar garment wisdom industry label across silent"
const INFURA_KEY = "bc893195963a48068f10e3286addec74"
const NFT_CONTRACT_ADDRESS = "0xad94D49561FF5F5EA9Caa005dbB0C278304E9E75"
const OWNER_ADDRESS = "0x54c6C99aD8297a0197C2DE905b59e315903A852F"
const NETWORK = "rinkeby"
const NUM_PROOFS = 10
const NUM_LOOTBOXES = 4
const DEFAULT_OPTION_ID = 0
const LOOTBOX_OPTION_ID = 2
let  proofs = [];
const account = "0x253FA1CFfcFF771cC897963417dAb7C5ae5f4fDa"


// Push PROOFS

proofs[0] = {
	"proof":
	{
		"A":["0x1ff4883b5731a5fd4bd3e77b35036d489abac6b39a838dee4f37b4c581f9b7cb", "0xc4feb4dda6c019111d41d7639e190ba777a808253e2d73223e24c43e02e3f1f"],
		"A_p":["0x18fc5edf14fc06b64b7542dbf5d89c0db1983b5b29b94f50f052a26096e9931d", "0x26e42208a5367893acb6f9c9d351115146ecdca8485e06071534660cb4dd09ff"],
		"B":
			[["0x1d2e47cc120a0db529d4124b4a6448fb1b4faa33fb1755077d361398a9ab78a5", "0xfd6528441d62aec50d40b990c87cb42924d81c19d0df5dd7b5470aa966656b2"], ["0x18656fab6eb57fb14d302005e95bd2c09880e5924805a7b0cf118b0a26a08d11", "0x2097c0d59301a6035124429e15561370cb9c4d88136e815152f230d0b67d239f"]],

		"B_p":["0x2e581074d86914306d4c343cce05e11faf25a617a9d9d9811c1972d3cf35a09e", "0x7d02c81f2f5d7e6ff4df9d795f7dcf673973e4574f1f8299f090cad858af47c"],
		"C":["0x2fbbf13c0f347b401a9b745133c3f431d7c195fab6154e847dcaa7ea41cfa858", "0x18b3ba7390905363c800e29b7f55f11b94f9e93ab0655e91abbfd2eb54d675a3"],
		"C_p":["0x184d91955cf4cee5b5c8c80f07ad1b82921e11e4908f51cf6acbdf06863048b2", "0x12150af87259dd5d1d7d01e6b4a425fe25a5f397e78811d2d053ccf6798d7203"],
		"H":["0xd28f0f19f47763e253686bd8c7acb807fd5b3aacbe1f1fceee72ecb502e200e", "0x2a99fa1f27f7ba0b306958c4ed8ed3784d7e099946e1e4f7bc872061dbafc8a7"],
		"K":["0x36f5c8f9a1668b829a2f0cdcea1db847c79fb67d3cffc954ae8a333ed8cba7", "0x1117df27b5f4be24858573f75e0e6cfef928a665804269c1cf87a47242ef3e89"]
	},
	"input":[1,1]}

proofs[1] = {
	"proof":
	{
		"A":["0xbd80eef75a087541493d0c802c76aca0b8c90aa782c490a45ae02c2ff86c18f", "0x77db0aea9241b0a6240afbff7e33f18e48004086e59e4e44946cfed2d4e58b"],
		"A_p":["0x2e3806d38bfa247f066421436d98a588020c131ac95b3fd271408c5389ecfc01", "0x5a225336b956070b8c36909e1de69127d1164cdd6f3f2738dbcfc41bb3c1f04"],
		"B":
			[["0xdaf6d5fb13f3ce96263ecb36772eba716e884f0e399c44795844e51dbb62d80", "0x4fd558d2ad663a42aa821dc17f8476af273ff524067c08cd5519fb92540f29e"], ["0x1f30107034d326985701d36deed58f3fecfc6e57413ef895903bcf430b5ea8f6", "0x1418799991a51499211000ca4f6de084ce981ec1c45c11a15d8abba5f00c07cf"]],

		"B_p":["0x16e5da5ec5cc9d5288d047c98c3ece9c2dd996793742618f0cc98766ec03e179", "0xd6a44dfddec2cf7e6ca3cd88bc9ffda47dba7c3c57796e5ef644e0095d9fb90"],
		"C":["0x13a164d6dfd00e9c17379784c30eb89ad5aa7f33a8ac922a34924001533a839d", "0x1de049252301a6c4a1bc073aa1c784eadd04e7d4f18f4f4bcd3e7713a9aecb1d"],
		"C_p":["0x2fa6f5b2a38c6cf0ef8553cc3f7ee8b9421211d38c729e0f59afed4c96b13ba5", "0xe03189c372e63ed0a7f98b8b13223533d9d1d982bfcac28459f7b3910e5e671"],
		"H":["0x11e2398e5bfbb977ccf4472492822b7b85ece974e02748b63e4ae9cf13404bbd", "0x766396aea6894aee2a163c89d0a6718b123aaea852069494afef1cdca89f072"],
		"K":["0x19b078401e9778752ecfcbd6a91d892ed47758b09ce12d33c23a994e0f05dc26", "0x14c0a364ce58418134e3f47891679c6d2f420c6ac132a443af194af63a37051a"]
	},
	"input":[9,1]}

  proofs[2] = {
  	"proof":
  	{
  		"A":["0xeac1f31a031305748e389556283e9ff6b36c0220b50e5510c404bf9c6543b30", "0x20d20455539ea68524a5cf4f542cac365858857ede6f4bc86d9b55808be5ce41"],
  		"A_p":["0x17ad5e3bbbaf8020267a9b5c68f1cf7aaeed1546884967a2d2f1c7d9df110cfa", "0x39bc5e33340a688c6319534d3271a43f6307dd0899fdc698b298248af081fd9"],
  		"B":
  			[["0x23d787fd46bb3b11196ae4dbddc903edf57257d8b5e128d0c3ff4c67415bfc68", "0x1a7f50170be309144c36844d5270ed2e0b80c596c478e2ff0c1460c90743bb65"], ["0x504b9294d6aa0a986dbe681ea18a9ce39d2a8c0299e529da007ec33dab674cd", "0xca6c8edcd9d6744099d8c5f74e6483ae521dc60bf2ecb03bee278fd7e1ffec9"]],

  		"B_p":["0x7a4f64c1f4f1cf40615a654272e1449ab518b7bb7e49a09b699518eb478a6ae", "0xfd6eab71d082954a4c9b3824ecb41bc8f4fd6866e0cca0e4311023bd9d7b7bc"],
  		"C":["0x1f06574bd2ab05ae58c3f8a705dc4059a67c9dfb7bc5d7d89fc9d32b00387f6b", "0x133616ed668ec964e6838b2b964f553de306b182218098dfddbe7f9bc9d84a5c"],
  		"C_p":["0x20e3d1f6bbb6f2fb5e90d1c9d8dbd3583bbd195098477a9ac0973b59332504d4", "0x2b7c4eff0c3197504805891c497cfdfece9dce0f772073e52822b2536374411d"],
  		"H":["0x2a12b197ad57f8cc741a7350ee15f44ac645ad080dfa7a12284be0c214ce95a9", "0x19a3165cc79fa4f5f461fe09436d9c2661023b302735fd0895400f612e64eb66"],
  		"K":["0x216a2275ff7563233ff90c49637cc3f644844e13401b21d564651c397a30a307", "0x89d62f64167b5a2965b09e99041e0f304c5b6aded71580e941520e52f5e0920"]
  	},
  	"input":[25,1]}

    proofs[3] = {
    	"proof":
    	{
    		"A":["0xd8c0c270499bfe7052ce8592020991e1c8129933c7b18783ec0d1977224f752", "0x1114839220a00e9ac4fbebc6cef0c3d3efefc8aaf80621366626f280badbe7d1"],
    		"A_p":["0xde9a5ff89b3d9611e5526765bf42335edeb0929c893c41da111a96cca08ff", "0x10384bff7d496f4b6526789c466ccc2039a3cab35634c03ef9063d9689d8f004"],
    		"B":
    			[["0x15b58c261732485c059474ca8d48b7ff7d0eb0ab67077e5cc930c8215e0ff464", "0x2f197033dbe0ff6abcae203cc0dda1fee8fcc68b94ab532b195d0c80f1140d99"], ["0x2ffa99997b18ade244786d9ec36262c12bb23778408648f4293de558ce794e2c", "0x248d22eeb5562689136c51e5c9e729af0e2232deb5f1e9135b4f4dda1fa61a1"]],

    		"B_p":["0x1f56b38b9646662be1d4f679a6a7f4cefbfda36684f8d6a313e7a852eaa987b", "0x1317c1c46019f232061774a112629958ae19e3bd6b127a867f94a6e8cfca9466"],
    		"C":["0xfacd9ceb440d04528b32f3dc090517efecfb022c4da2e61aaa84b1d4551081f", "0x2ba2f1ebb4cac1c779f97691e351fbf752d2b24a4cfe7ccf65dc610431b18319"],
    		"C_p":["0x1ba5956a9130962ac180b5815e2cb3ccd5081bdb219ed7242972b7a58efe9847", "0x2f2f165545d4588f5a5d9cef7f59a9c8c713c145b494cf8e86faa6bfed6d1341"],
    		"H":["0x5fd5138dd3e0904e792d0abb3630224fc38537b4d88e04a5fbce55df598d6ed", "0x1627165ab825ae4242a8c3dea552b96397c0e909195191bb00bd59f5a73ffda5"],
    		"K":["0x208c93465604f8330257d58fb823fb0da600c4426977a468d5e5657c5255beb3", "0xfc91ff98ed94d5cdca0c9e36db8978707a252a4db19fbe4c96384bf109e872e"]
    	},
    	"input":[16,1]}

      proofs[4] = {
      	"proof":
      	{
      		"A":["0x1bc5e9bbb139512584442195293e0e79bea99344a40035d78384efcd681df9c1", "0x5a6fbbdcad964e3894783ca33c9f5ae666520956f2177450a3c98e46c1253d2"],
      		"A_p":["0x22bc5452c7c0300b77f744511b06fd2716c029d6a42973f186eac9b7f0782a97", "0x1a250336a7012f43b9db5a77d0fa2e197ad36b25ca0cd4ad18d7a1429e195515"],
      		"B":
      			[["0x16bed5c64d8fc928bd9f2ea4ab72ff11f325dc7d79be351dc7e06fc2cfee3336", "0x25e739f2c33083c33f9f5bca64c071d4c26e2dd4be74bfaf60dc578f8584f745"], ["0x18c961eb1bb1e71e24ea2f0f31ed3557cec504fb9adae5ba9ae6de9f31299374", "0x1054c72d8de13b8bdba7b6ef4daa25df43f82c6f1058ea49b78bd132845b3c4"]],

      		"B_p":["0x1f1ec89582ae9031ae3000fd665ce41313dcd2e348d6359ab109981d95413973", "0x868d040e5365fa68f386cb7ba81a5544225d7450958419c99ba087ab4966278"],
      		"C":["0x156ac91e4f8d9e6159529fc946b15ff5a5f369250993498bf1c2bdc672898ad0", "0x1e29cbcc93d095080afff95752d593c08637ef10e03686009527ceeecf7ba932"],
      		"C_p":["0x4c2185041c73506c8e9d6c63a7a48c34feaa7dd6d5c0ad97022fd21832e6335", "0x7ab7834d306303a9ab682802b2c94f9f3ecebfcf2a2ef53b1a2132f771bf8df"],
      		"H":["0x278808b641c05e7ab13a48a7d3895e4cdd2b480457f0b62266c721d1b2e073a2", "0xdba70370a9939a038404dcb8aa787e0d627fc1bcc68f46a3025724089cbc771"],
      		"K":["0x240c4dc2bb7da149d6deef3ca29853f6aee3f0141e42945ee6dc5c750711fcf1", "0x1a32d294fee601f2ad566d83d80ecb3854f5a139c3f33e3450f13d9040bba025"]
      	},
      	"input":[36,1]}

        proofs[5] = {
        	"proof":
        	{
        		"A":["0xafc1562d53a765af2d71286f803d5a91fd56e2a40dd163e487b21d43eb3339", "0xe733b9cea4458c6717a385b0aafef86469a42024bb3c32ec45b1dd14dcb3ba2"],
        		"A_p":["0xe379a2855b33444092ce3cf5d65c2b7e81690aa7629d3c29c7a1f2c3e3082c2", "0xd4fe0726521235ce400db5d86cb9a405eb6193a6ef6148f1171f629c591122a"],
        		"B":
        			[["0x231a3a158f0717f4c481a26866cb7511afbaae906c557076674234758d77553", "0x4a275b969765320b2f76bfd1e313b6a297b37e0697f4afd9af085b36e03ec1c"], ["0x1349420a50589e9fe790655ba20b2f71393b8913b2ddb1c7d2998f0962f6ec4e", "0x1110544e1acd8c9ed43b7c7d30af9a03e66c872c72b0b237be00a50b281a241b"]],

        		"B_p":["0xd6fb1f4c61eb9a606b77290bb33359174f2d99bc2dc95e4631a487654239188", "0x9c9b7d3cd05dd3ddcb00b0edc07358ff3d1b0dbe6445d691827dfcb2badd1fb"],
        		"C":["0x5033e1a689f6c577fce104b8ac22a3adf4d605d3c3c5cea1977538a4abc63e7", "0x1f5e6856e6d600f05989bfd8e535518752b435bddd5c5bf293ffbeeb00bfa440"],
        		"C_p":["0x2163ecaaaef29ea8797ae461d8d9063e7fe96fca3e67ffe37484963ee5509c6a", "0x2e696077dc87585bdc14d44412c5dde6a126d80c689352df7b09725eb3055aee"],
        		"H":["0x13686ef2b1b6c1e08f006e239b52ba600491d2730855b45f7acc6835253d0131", "0x2079e808af7eaf117ffe9794cde9d7a905b9b24a7101e5579d1a1e47658393c9"],
        		"K":["0x818cadaa14621502b0169e8f404603ce04ff6b72163598440760e97cf6cec41", "0x113e77d0bf16a25e57c357762ba9a1f22e8587dc9f77bdc96965c0cd8ac5d987"]
        	},
        	"input":[49,1]}

          proofs[6] = {
          	"proof":
          	{
          		"A":["0x1f5d856c1614a784923286602181c575f7dc97691ee84e308fcfd24c8112044b", "0x14c502efff66a912554bc54e72567488d691a96e9aaabb998d6d8e5d1de6068d"],
          		"A_p":["0xa58e9c2251b3f80a928c15bd099df300806c947ae3efe47fba462020443c61c", "0x2e0ae0b743a076e02f1db8c8d4af016d0f3615910e648bc8df052ae3e10b754a"],
          		"B":
          			[["0x15ce2c70f5ebb0942c96ceaa5914a4e063e8f45c429716daec2917e0d9c4a41f", "0x15e54ec95f7bfbb2606fda6a54892b9312756bf51e4860d421d1906589800877"], ["0xfe6d567e5246e571bc22ae5919cf1e2cb2237ca20003b6e03fb5b901d674ea5", "0x48fd87c86c988ed2601a72df37b3f85daccf432d13b42bb2a436270dfadb3f8"]],

          		"B_p":["0x2a6a84995bdf363a41593be96c6c7c1c12e0b6bb6ba3f0a1fa20f14297e7ff95", "0x2b9b1daeeca27e4e6aacb5ead57a466bd6b802471a645dc326ff569d0be013f8"],
          		"C":["0x1c67b2f6562b22d56e0a5d3f21d0f699912d73ce0f4cc9cce6bf314c70340b68", "0x9f50c46db3d96f25055f1af6a0e3488dc801c544cb669cc653f767a60eb440e"],
          		"C_p":["0x19b862b2719e824366364c116999e37becff65576cb43d737d5172d06b2cfe0e", "0x98b2a309f7137356d99166490e9f0955a0815d16a2bb98846cf661094abcc2e"],
          		"H":["0x14add8d489a33f4dd5c32e6651590c2106e6654ae60cc1cef3c32ae0787fc91d", "0xe2e2dd2117f71e477739666d76d8f5a4834a86ae97f1bd8def01f1031015126"],
          		"K":["0x19fe73d4e18b2f48df0a8075c52177d28aaaf61feccff59a4858e8747c3915a9", "0x1f3a05abfd10dc50c3bb0175de181bd7426a5e3df0fbb2eb6275155fa1d8f5a9"]
          	},
          	"input":[64,1]}

            proofs[7] = {
            	"proof":
            	{
            		"A":["0xc0f84fc5fa2f4c6c4cadb6f3f2900ac4f13d9d8f2e92379f02303c642fa4aae", "0x1fc86ec1b1fe340ea376bf26ccece3699ed11428b40c08d313f5e8e089cd06e9"],
            		"A_p":["0x1577c77db631fc2a17bee221c97334f3cf6ae9763ffbc0d41ed584a51acf613b", "0x13335cd1472fafa0301e729a1ae9192db2dae04cfc5d1a345aad807a85ffccda"],
            		"B":
            			[["0x146b2d2faf82f982d09b29684b5758a66d8d4c20f81d218ef80fc0f6dd9fe45b", "0x16390296c42687a87d91305c0996e5654f9b779b305c9833fabbf36cb83cd0a7"], ["0x7bcbadc7c728fe9e6b9f737edbc35c8c8dbabab8eec56bb7d741b1a970f7835", "0x335400bcd5457dd0819d22e663bdfb8ee6fd0dc7f0948763055743e6cb490a6"]],

            		"B_p":["0xf0e16c1e4078ccccdc4139d625008e8ca7b6620a9a56e5eb4055674afa668e2", "0x1459376c659fa162978697d720fcff43a4f71e7560e5f4ac8014a1593b08ac5a"],
            		"C":["0x1e6e88392f593919e8211a98a5a71fe022d70bb425ae0a09eb6ac8de9679553a", "0x28b378e8210e91fafde3e81a5c243c3541e76bb432562f1456b95165763f6f54"],
            		"C_p":["0x24abd3c850109913c59feadafcbc829007e9944ee35708bc045262dae9488128", "0x1215890791028c8defbe9891e0d74c3f0272e49662025e54c3d4295308a32931"],
            		"H":["0x2c5617a994a520708caeec87a37ccc77a558c6d2a4014ee4ad3cb5fd8fafe467", "0xfcc2729568a6eb7fb5e3f86293ede44318bbdc62cf9c2e58e4398f72d71fbdd"],
            		"K":["0x190797b6c8e0df8728023b2015d3fa6d0a3a141d28c9525ad02919cc4f26bdf0", "0x18eaa6597cd71c5d730eefae57faaf59c70193d1b96d13a03539462d617b1d35"]
            	},
            	"input":[81,1]}

              proofs[8] = {
              	"proof":
              	{
              		"A":["0x16f032249d15be0c12b07aee449781b9958a8ac0fbbde28072ee3b2e0da75fc3", "0x28c39ca187fc820bd97571d9d9f9d40cd769391b74c47a18a812823f1b929ae"],
              		"A_p":["0x22bfbca6147d776e7f81e50b167b9a77af1eff8def302528319ee4de518b7cf6", "0x290e0526a804d174945ed687b2c56c3f1fbf4841d97121b8bb43ccc37ff3cc8e"],
              		"B":
              			[["0x1989eebed33484a3c14cd06fd38e8c8021030286a2a2e8873de9cde44ee177b3", "0x145a883c553f0fd6871c3d612b93f751eb7981ca2eeb054bc2a0916839996147"], ["0x1125ea8f69b933bf2bf2c505d92d4cf12cfd97be31bf1c131675b6ec65593154", "0x23d89a65f0b89df5e104e30985ec79d0aeb66508766bca85801fcb196ef35359"]],

              		"B_p":["0x1ad554c3d204b50ec2c4df32b96ba0c4d2939569ba2040044d322d2e0b380a2", "0x25551c13fd4cf2404b4fb8cf3a019b1916f0406d6264b13dba0e77319612ed21"],
              		"C":["0xf454ed98cbd551bf52be7f77eeb8f0fc81fc057f5ace1c0bea8150e3f7e4e8d", "0x112930f890f4a47f05ff42e29b72d95d7ce8b18822fd55aef926a7ff2b688844"],
              		"C_p":["0xedd587d92032d5fceae9ccb97e8c43f48dddec64f368617c44197c82f3132cd", "0x255a3355562854560a9a1908a6a79f560f8b0a4442877e60660042aae0e0dab"],
              		"H":["0x2ec27e1c7bd364329db91bddcbb56e0d654dc1c81a8353b04e0901779024380d", "0xb966bd054e195cd45b1b86aa18e800c22804b8dde07266563dde2ab1a894c6b"],
              		"K":["0x2e1fb40f9ee4904f733622b3a489588bc82bd8b9e57dfcccceaff01f5a18b1d1", "0x24237d8dd1d129b88a508ddfe555846659791b75252a5a4e78bfe486f2636b8b"]
              	},
              	"input":[100,1]}

                proofs[9] = {
                	"proof":
                	{
                		"A":["0x1a2b2b9d3bbfff3487959bc06f0a52e1b95a7c12e12dd107054dad4afe2d46f1", "0x1ddddda53be04acae2a4f52a3cc8c27e4546ba26e44b43b2966e58ccef0ab29a"],
                		"A_p":["0x167eb6100a660d63c24f1c1ab984e6da2fff2e922996af02c70d79d3ebb13d55", "0x956059c1174e29fccf8c3b2add5e81eb7b5c513bd6a9d9656bc3fb620d815a4"],
                		"B":
                			[["0x412b2565136bf97f68114337cd861c8b12e1ec358122908ef8828b789bdc7b0", "0x15bee471c60eeabbe76edb8e727513c7751f236014587516399b9674c38c9529"], ["0x19f2c6b4c325ba1af2b023a31cf0e9b829d02f88a8aaf9cf0a3dfff4b9941784", "0xfef311085d3919d8ea56f5426e9648bff7dc807908172103888ba62a878b278"]],

                		"B_p":["0x2e04846ce3ffe1a91ba792e9ae8073df1e07c3ac04130dc5e98e97bab5840d8", "0x16d85ba1dfead6646517ce34baf748ea1cba1fcb7f734ef12d96a5801a1522a"],
                		"C":["0x3d441b03124463f37e225a0588e10b7f51b6b239c7ffa3ed7a5f824ad26491d", "0xb7370599f0e97c44e6d142990ba4101d937640e28b25dfb5522679f890e2850"],
                		"C_p":["0x11272878078479aacd38765a777699ffc4f91ef8256b0b2079987613fb8ef762", "0x2cc0fe6868777c042030a8f1894b09b730e0e099207a6aae18345729f357e45f"],
                		"H":["0x2fedf36827d39cfee8f78e2c9a0efd8340c57ec8f8308d62991f087f48b56e0d", "0x5ab65d0977e82940aa68b622c7a2ac73edaf1a5820073f25f2d603fe972eb6"],
                		"K":["0x2c25d4d9e5126e5cb7ca4743f6fecaf4e5ccfdf3c0803e1a74e5371f4132bd6d", "0x69dd8d3c6595836a2b5368ac951822320bd88b1a78a8748bc08faa0bc710a65"]
                	},
                	"input":[121,1]}




if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
    console.error("Please set a mnemonic, infura key, owner, network, and contract address.")
    return
}

const CONTRACT_ABI = require('./eth-contracts/build/contracts/SolnSquareVerifier');
const NFT_ABI = CONTRACT_ABI.abi;

async function main() {

    const provider = new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io/${INFURA_KEY}`)
    const web3Instance = new web3(
        provider
    )

    console.log("PROOF LENGTH..", proofs.length);

    const nftContract = new web3Instance.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS, { from:OWNER_ADDRESS, gasLimit: "1000000" })

      for(let i=0; i< proofs.length; i++) {
        try{

          const result = await nftContract.methods.preMint.call(
                                                            account,
                                                            i,
                                                            proofs[i].proof.A,
                                                            proofs[i].proof.A_p,
                                                            proofs[i].proof.B,
                                                            proofs[i].proof.B_p,
                                                            proofs[i].proof.C,
                                                            proofs[i].proof.C_p,
                                                            proofs[i].proof.H,
                                                            proofs[i].proof.K,
                                                            proofs[i].input,
                                                            { from: OWNER_ADDRESS, gas:  5510328});

            console.log("Minted Token. Transaction: " + result);

          } catch(e){
                console.log("ERROR: " , e);
          }
      }
}

main()
