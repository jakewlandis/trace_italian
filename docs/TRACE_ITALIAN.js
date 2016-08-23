var storyContent = ﻿{"inkVersion":12,"root":[{"->":"ARIZONA"},"done",{"ARIZONA":[["^You arrive in Arizona.","\n","^. . . . . . . . .Z","\n","^. . . . . ZTwZwTZ","\n","^. . . ZTw.ZZZZZ.wTZ","\n","^.ZTw.ZZZZZZZZZZZ.wTZ","\n","^. TZZZTTTTTTTTTZZZT","\n","^. TZZZTTTTTTTOTZZZT","\n","^. TZZZTTTTTTTTTZZZT","\n","^. TZZZTTTTTTTTTZZZT","\n","^An abandoned shack sits in front of you. Patches of desert grass are clumped around you boots.","\n",["ev","str","^Investigate the abandoned shack.","/str","/ev",{"*":".^.c","flg":20},{"c":[{"->":"SHACK"},{"#f":7}]}],["ev","str","^Dig into the soil.","/str","/ev",{"*":".^.c","flg":20},{"c":[{"->":"DIG"},{"#f":7}]}],null],{"#f":3}],"SHACK":[["^You peer into the dusty window of the abandoned wooden shack. Beams of sunlight flow through gaps in the wall panels.","\n",["ev","str","^Open the door to the shack.","/str","/ev",{"*":".^.c","flg":20},{"c":[{"->":"SHACK.ENTER_SHACK"},{"#f":7}]}],["ev","str","^Dig into the soil.","/str","/ev",{"*":".^.c","flg":20},{"c":[{"->":"DIG"},{"#f":7}]}],null],{"ENTER_SHACK":[["^The door creaks open and the top hinge falls from the frame, sending the door awkwardly toward the ground and twisting the lower hinge against the splintered wood.","\n","^Previously obscured from your view through the window you now see the outline of a cloaked figure collapsed on the floor. Pieces of paper are strewn about the room; they appear to be a collection of notes and letters. ",{"->":"SHACK.HESITATE"},"\n",null],{"#f":3}],"HESITATE":[[["ev",{"^->":"SHACK.HESITATE.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^?","/str","/ev",{"*":".^.c","flg":22},{"s":["^The cloak",{"->":"$r","var":true},null],"c":["ev",{"^->":"SHACK.HESITATE.0.0.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^ smells of decay and dust but you find no clues.","\n","\n",{"->":".^.^.^.^"},{"#f":7}]}],["ev",{"^->":"SHACK.HESITATE.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^?","/str","/ev",{"*":".^.c","flg":22},{"s":["^The notes and letters",{"->":"$r","var":true},null],"c":["ev",{"^->":"SHACK.HESITATE.0.1.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^ are spread out in a circular pattern around the body. No single paper provides any meaningful information but the layout seems peculiar.","\n","\n",{"->":".^.^.^.^"},{"#f":7}]}],[{"*":".^.c","flg":24},{"c":["^ Cries pierce the silence of the desert afternoon -- you race to the doorframe and see a team of hunters riding across the road on the horizon. They appear to be heading west and will soon pass the shack.","\n","\n","^...o ....o .....o","\n","^.VTV .VTV .VTV","\n","^...˩L ...˩L ....˩L","\n",{"->":"SHACK.HIDE"},{"#f":7}]}],null],{"#f":3}],"HIDE":[[["ev",{"^->":"SHACK.HIDE.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^?","/str","/ev",{"*":".^.c","flg":22},{"s":["^The door",{"->":"$r","var":true},null],"c":["ev",{"^->":"SHACK.HIDE.0.0.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^ is still hanging open -- you run to the west side of the shack, hoping the hunters will go past without noticing your presence.","\n","\n",{"->":"SHACK.HUNTERS"},{"#f":7}]}],["ev",{"^->":"SHACK.HIDE.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^?","/str","/ev",{"*":".^.c","flg":22},{"s":["^The window",{"->":"$r","var":true},null],"c":["ev",{"^->":"SHACK.HIDE.0.1.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"^ is jammed shut -- you turn quickly on your heel and run to the west side of the shack, hoping the hunters will go past without noticing your presence.","\n","\n",{"->":"SHACK.HUNTERS"},{"#f":7}]}],null],{"#f":3}],"HUNTERS":[["^The hunters ride west along the road toward your position. A few hundred feet from the shack the leader raises his arm and shouts something unitelligible.  The horses slow to a trot as the hunters move from the road to the dirt path leading to the shack.","\n","^The leader calls the attention of another rider clad in a red vest.  He points to the door's broken hinge and the red vested hunter moves forward to investigate.","\n",["ev",{"^->":"SHACK.HUNTERS.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^You hold your breath, hoping not to be noticed.",{"->":"$r","var":true},null],"c":["ev",{"^->":"SHACK.HUNTERS.0.4.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"SHACK.BREATH"},{"#f":7}]}],null],{"#f":3}],"BREATH":[["^The red vested hunter grabs the door with both hands and rips it from the hinges, throwing the aged wood to the ground. He peers inside the shack and you hear his footsteps on the wooden floorboards. The hunter lifts the cloak from the floor, clattering the dried bones of the corpse across the shed.","\n","^He picks up the skull and exits the shack.  Inserting his hand into the underside of the skull, the red vested hunter opens and closes the jaw and squawks at the leader of the riders.","\n","^The leader dismounts, walks to the red vest and pulls out his knife.  He thrusts it into the neck of the red vest and twists, then forces his gasping body to the ground.","\n",["ev",{"^->":"SHACK.BREATH.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Blood spatters the sand near your position.",{"->":"$r","var":true},null],"c":["ev",{"^->":"SHACK.BREATH.0.6.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"BLOOD"},{"#f":7}]}],null],{"#f":3}],"#f":3}],"DIG":[["^You unpack a small trowel from your belongings and dig into the patch of sand and earth at your feet. The sand shifts with each dig, making for tiring work but there is enough moisture and clay to allow for progress.","\n","^You wipe the sweat from your brow and assess your progress - despite the small trowel you've dug deeply enough to lay in the shallow without being exposed to the wind. If you add your tarp it may be enough to form a shelter for the night.","\n",["ev","str","^Throw your pack in the shallow.","/str","/ev",{"*":".^.c","flg":20},{"c":[{"->":"DIG.SHALLOW"},{"#f":7}]}],null],{"SHALLOW":[["^As you pick up your pack a cry pierces the silence of the desert afternoon. You throw your pack in the shallow and then slide in, laying prone. You see a pack of hunters heading west past the shack.","\n",["ev","str","^Continue to lay flat against the ground.","/str","/ev",{"*":".^.c","flg":20},{"c":[{"->":"DIG.FLAT"},{"#f":7}]}],null],{"#f":3}],"FLAT":[["^The hunters ride west along the road toward your position. A few hundred feet from the shack the leader raises his arm and shouts something unitelligible.  The horses slow to a trot as the hunters move from the road to the dirt path leading to the shack.","\n","^The leader calls the attention of another rider clad in a red vest.  He grabs the handle of the door and pulls violently, ripping the timber from the hinges. He throws the door to the ground and walks inside.","\n",["ev",{"^->":"DIG.FLAT.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^You hold your breath, hoping not to be noticed.",{"->":"$r","var":true},null],"c":["ev",{"^->":"DIG.FLAT.0.4.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"DIG.BREATH_FLAT"},{"#f":7}]}],null],{"#f":3}],"BREATH_FLAT":[["^The hunter lifts the cloak from the floor, clattering the dried bones of the corpse across the shed.","\n","^He picks up the skull and exits the shack.  Inserting his hand into the underside of the skull, the red vested hunter opens and closes the jaw and squawks at the leader of the riders.","\n","^The leader dismounts, walks to the red vest and pulls out his knife.  He thrusts it into the neck of the red vest and twists, then forces his gasping body to the ground.","\n",["ev",{"^->":"DIG.BREATH_FLAT.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Blood spatters the sand near your position.",{"->":"$r","var":true},null],"c":["ev",{"^->":"DIG.BREATH_FLAT.0.6.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"BLOOD"},{"#f":7}]}],null],{"#f":3}],"#f":3}],"BLOOD":[["^The leader picks up the skull, inserts his hand and makes his own squaking noise.  The rest of the riders laugh nervously.  You shift uncomfortably, careful not to make a sound.","\n","^The leader mounts his horse and the riders depart westward as you carefully remain out of sight.  Breathing a sigh of relief you decide to rest until nightfall.","\n",["ev",{"^->":"BLOOD.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^The sun sets against the desert sky.",{"->":"$r","var":true},null],"c":["ev",{"^->":"BLOOD.0.4.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"NIGHTFALL"},{"#f":7}]}],null],{"#f":3}],"NIGHTFALL":[["^The moon rises brightly in the clear sky, casting the desert in a bluish hue. The hunters long departed, save for the bloody corpse of the one in the red vest, you approach the now doorless entrance to the shack.","\n",["ev",{"^->":"NIGHTFALL.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Moonlight streams in through a gap in the wall.",{"->":"$r","var":true},null],"c":["ev",{"^->":"NIGHTFALL.0.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.MOON"},{"#f":7}]}],null],{"MOON":[["^The moonbeam crosses where the cloaked figure once laid, crossing the circle of papers still oddly strewn about the room. The angle of the light is odd, almost intentional in how it highlights the paper laying at the 3 o'clock position.","\n",["ev",{"^->":"NIGHTFALL.MOON.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^You pick up the paper and hold it to the moonlight.",{"->":"$r","var":true},null],"c":["ev",{"^->":"NIGHTFALL.MOON.0.2.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"NIGHTFALL.PAPER"},{"#f":7}]}],null],{"#f":3}],"PAPER":[["^In large, bold letters the page reads: ",{"->":".^.^.^.CRYPTO2"},"\n",null],{"#f":3}],"CRYPTO2":[[["G>",["ev",{"VAR?":"LETTER_L"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_R"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_B"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_G"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_R"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_G"},"out","/ev",null],"G<",null],"^ ",["G>",["ev",{"VAR?":"LETTER_A"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_O"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_B"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_E"},"out","/ev",null],"G<",null],"^ ",["G>",["ev",{"VAR?":"LETTER_I"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_X"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_U"},"out","/ev",null],"G<",null],"^ ",["G>",["ev",{"VAR?":"LETTER_I"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_Y"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_R"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_Z"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_U"},"out","/ev",null],"G<",null],"^ ",["G>",["ev",{"VAR?":"LETTER_O"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_I"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_R"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_C"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_O"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_R"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_B"},"out","/ev",null],"G<",null],"\n",{"->":".^.^.^.CRYPTO2A"},null],{"#f":3}],"CRYPTO2A":[[["G>",[["ev",{"VAR?":"LETTER_O"},"str","^I","/str","==",{"VAR?":"LETTER_R"},"str","^A","/str","==","&&",{"VAR?":"LETTER_G"},"str","^S","/str","==","&&",{"VAR?":"LETTER_Y"},"str","^R","/str","==","&&","/ev",null],[{"->":".^.b","c":true},{"b":[{"->":"NIGHTFALL.CRYPTO3A"},{"->":".^.^.^.3"},null]}],[{"->":".^.b"},{"b":[["ev","str","^Swap O for I","/str","/ev",{"*":".^.c","flg":20},{"c":[[["ev","str","^I","/str","/ev",null],{"temp=":"LETTER_O","re":true},null],{"->":"NIGHTFALL.CRYPTO2"},{"#f":7}]}],["ev","str","^Swap R for A","/str","/ev",{"*":".^.c","flg":20},{"c":[[["ev","str","^A","/str","/ev",null],{"temp=":"LETTER_R","re":true},null],{"->":"NIGHTFALL.CRYPTO2"},{"#f":7}]}],["ev","str","^Swap G for S","/str","/ev",{"*":".^.c","flg":20},{"c":[[["ev","str","^S","/str","/ev",null],{"temp=":"LETTER_G","re":true},null],{"->":"NIGHTFALL.CRYPTO2"},{"#f":7}]}],["ev","str","^Swap ",["G>",["ev",{"VAR?":"LETTER_C"},"out","/ev",null],"G<",null],"^ for D","/str","/ev",{"*":".^.c","flg":20},{"c":[[["ev","str","^D","/str","/ev",null],{"temp=":"LETTER_C","re":true},null],{"->":"NIGHTFALL.CRYPTO2"},{"#f":7}]}],["ev","str","^Swap ",["G>",["ev",{"VAR?":"LETTER_Y"},"out","/ev",null],"G<",null],"^ for R","/str","/ev",{"*":".^.c","flg":20},{"c":[[["ev","str","^R","/str","/ev",null],{"temp=":"LETTER_Y","re":true},null],{"->":"NIGHTFALL.CRYPTO2"},{"#f":7}]}],{"->":".^.^.^.3"},null]}],"nop",null],"G<",null],"\n",null],{"#f":3}],"CRYPTO3":[[["G>",["ev",{"VAR?":"LETTER_L"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_R"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_B"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_G"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_R"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_G"},"out","/ev",null],"G<",null],"^ ",["G>",["ev",{"VAR?":"LETTER_A"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_O"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_B"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_E"},"out","/ev",null],"G<",null],"^ ",["G>",["ev",{"VAR?":"LETTER_I"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_X"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_U"},"out","/ev",null],"G<",null],"^ ",["G>",["ev",{"VAR?":"LETTER_I"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_Y"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_R"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_Z"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_U"},"out","/ev",null],"G<",null],"^ ",["G>",["ev",{"VAR?":"LETTER_O"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_I"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_R"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_C"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_O"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_R"},"out","/ev",null],"G<",null],["G>",["ev",{"VAR?":"LETTER_B"},"out","/ev",null],"G<",null],"\n",{"->":".^.^.^.CRYPTO3A"},null],{"#f":3}],"CRYPTO3A":[[["G>",[["ev",{"VAR?":"LETTER_G"},"str","^S","/str","==",{"VAR?":"LETTER_B"},"str","^N","/str","==","&&",{"VAR?":"LETTER_E"},"str","^D","/str","==","&&",{"VAR?":"LETTER_C"},"str","^L","/str","==","&&","/ev",null],[{"->":".^.b","c":true},{"b":[{"->":"NIGHTFALL.CRYPTO4"},{"->":".^.^.^.3"},null]}],[{"->":".^.b"},{"b":[["ev","str","^Swap B for N","/str","/ev",{"*":".^.c","flg":20},{"c":[[["ev","str","^N","/str","/ev",null],{"temp=":"LETTER_B","re":true},null],{"->":"NIGHTFALL.CRYPTO3"},{"#f":7}]}],["ev","str","^Swap E for D","/str","/ev",{"*":".^.c","flg":20},{"c":[[["ev","str","^D","/str","/ev",null],{"temp=":"LETTER_E","re":true},null],{"->":"NIGHTFALL.CRYPTO3"},{"#f":7}]}],["ev","str","^Swap ",["G>",["ev",{"VAR?":"LETTER_C"},"out","/ev",null],"G<",null],"^ for L","/str","/ev",{"*":".^.c","flg":20},{"c":[[["ev","str","^L","/str","/ev",null],{"temp=":"LETTER_C","re":true},null],{"->":"NIGHTFALL.CRYPTO3"},{"#f":7}]}],{"->":".^.^.^.3"},null]}],"nop",null],"G<",null],"\n",null],{"#f":3}],"CRYPTO4":[["^The message suddenly becomes clear.  You stuff the paper in your pocket and turn towards the door only to see the bloody figure in the red vest, one eye staring through you as the other looks absently toward the floor.","\n","^The hunter moves his hand to his blade, using his remaining strength to lunge at you and buries his knife into the side of your shoulder.","\n",["ev",{"^->":"NIGHTFALL.CRYPTO4.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Pull the knife free",{"->":"$r","var":true},null],"c":["ev",{"^->":"NIGHTFALL.CRYPTO4.0.4.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"NIGHTFALL.FINAL"},{"#f":7}]}],["ev",{"^->":"NIGHTFALL.CRYPTO4.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.c","flg":18},{"s":["^Bite the hunter's wrist",{"->":"$r","var":true},null],"c":["ev",{"^->":"NIGHTFALL.CRYPTO4.0.5.c.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.s"},[{"#n":"$r2"}],"\n",{"->":"NIGHTFALL.FINAL"},{"#f":7}]}],null],{"#f":3}],"FINAL":[["^WE HOPE YOU HAVE ENJOYED THIS TRIAL EXPERIENCE OF THE TRACE ITALIAN. TO CONTINUE YOUR ADVENTURE, PLEASE SEND 4 SASE and $10 TO FOCUS GAMES, BOX 750-B, MONTCLAIR, CA 91762.","\n","end",null],{"#f":3}],"#f":3}],"global decl":["ev","str","^K","/str",{"VAR=":"LETTER_L"},"str","^R","/str",{"VAR=":"LETTER_R"},"str","^B","/str",{"VAR=":"LETTER_B"},"str","^G","/str",{"VAR=":"LETTER_G"},"str","^F","/str",{"VAR=":"LETTER_A"},"str","^O","/str",{"VAR=":"LETTER_O"},"str","^E","/str",{"VAR=":"LETTER_E"},"str","^T","/str",{"VAR=":"LETTER_I"},"str","^X","/str",{"VAR=":"LETTER_X"},"str","^E","/str",{"VAR=":"LETTER_U"},"str","^Y","/str",{"VAR=":"LETTER_Y"},"str","^Z","/str",{"VAR=":"LETTER_Z"},"str","^C","/str",{"VAR=":"LETTER_C"},"/ev","end",null],"#f":3}]};