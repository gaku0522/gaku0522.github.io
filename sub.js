

element = { H:1.00794,He:4.002602,Li:6.941,Be:9.01218,B:10.811,C:12.0107,N:14.0067,O:15.9994,F:18.9984032,
                   Ne :20.1797, Na :22.98976928, Mg :24.305, Al :26.9815386, Si :28.0855, P :30.973762, S :32.065, Cl :35.453,
                   Ar :39.948, K :39.0983, Ca :40.078, Sc :44.955912, Ti :47.867, V :50.9415, Cr :51.9961, Mn :54.938045, Fe :55.845,
                   Co :58.933195, Ni :58.6934, Cu :63.546, Zn :65.409, Ga :69.723, Ge :72.64, As :74.9216, Se :78.96, Br :79.904,
                   Kr :83.798, Rb :85.4678, Sr :87.62, Y :88.90585, Zr :91.224, Nb :92.90638, Mo :95.94, Tc :98.0, Ru :101.07,
                   Rh :102.905, Pd :106.42, Ag :107.8682, Cd :112.411, In :114.818, Sn :118.71, Sb :121.76, Te :127.6, I :126.90447,
                   Xe :131.293, Cs :132.9054519, Ba :137.327, La :138.90547, Ce :140.116, Pr :140.9076, Nd :144.242, Pm :145.0,
                   Sm :150.36, Eu :151.964, Gd :157.25, Tb :158.92535, Dy :162.5, Ho :164.93032, Er :167.259, Tm :168.93421,
                   Yb :173.04, Lu :174.967, Hf :178.49, Ta :180.94788, W :183.84, Re :186.207, Os :190.23, Ir :192.217, Pt :195.084,
                   Au :196.966569, Hg :200.59, Tl :204.3833, Pb :207.2, Bi :208.9804, Po :210.0, At :210.0, Rn :220.0, Fr :223.0,
                   Ra :226.0, Ac :227.0, Th :232.03806, Pa :231.03588, U :238.02891, Np :237.0, Pu :244.0, Am :243.0, Cm :247.0,
                   Bk :247.0, Cf :251.0, Es :252.0, Fm :257.0, Md :258.0, No :259.0, Lr :262.0};










function func1() {


        //元素のリスト
        var input_message = document.getElementById("input_message").value;

         input_message = String(input_message);
         input_message = input_message.split(/,/);


         //組成比のリスト
         var input_message2 = document.getElementById("input_message2").value;

          input_message2 = String(input_message2);
          input_message2 = input_message2.split(/:/);
          var array_num = input_message2.length;

          var sum = 0;
          for ( var i=0; i<parseInt(array_num); i++){
            sum += parseFloat(element[input_message[i]])*parseFloat(input_message2[i]);
          }

          var sum_num = 0;
          for (var i=0; i<parseInt(array_num); i++){
            sum_num += parseFloat(input_message2[i]);
          }

          //実際に測った元素
          var input_message3 = document.getElementById("input_message3").value;
              input_message3 = String(input_message3);
          var index_num = input_message.indexOf(input_message3);


          //測定した試料の重さ
          var input_message4 = document.getElementById("input_message4").value;

          //測定した物質のモル
          var exp_mol = parseFloat(input_message4)/parseFloat(element[input_message[index_num]])/parseFloat(input_message2[index_num])

          //それぞれの元素の必要なg数の導出
          var element_glam = 0;
          var element_glam_array = [];

          for ( var i=0; i<parseInt(array_num); i++){
            element_glam = parseFloat(element[input_message[i]])*parseFloat(input_message2[i])*exp_mol;
            element_glam_array.push(element_glam);
          }




          var out = ''

          for ( var i=0; i<parseInt(array_num); i++){
            out += input_message[i] + ':' + Math.round(element_glam_array[i]*1000000)/1000000 +"gです．";
            out += "\n"
          }

          if (isNaN(element_glam_array[0]) ===true ){
            result.textContent = '計算できませんでした．';
          }else{
            result.textContent = out;
          }

          // document.getElementById("output_message").innerHTML = out;

          reset.classList.remove('hidden');





      };


      function func2(){
        result.textContent = 'ここに結果を表示します．';
        input_message = '';
        input_message2 = '';
        input_message3 = '';
        input_message4 = '';
      };
