                // add countent in inputs
function copying() {
    document.getElementById('name').innerHTML = document.getElementById('inp_name').value;
    document.getElementById('job_title').innerHTML = document.getElementById('inp_job').value;
    document.getElementById('phone').innerHTML = document.getElementById('inp_phone').value;
    document.getElementById('whatsup').innerHTML = document.getElementById('inp_whats').value;
    document.getElementById('email').innerHTML = document.getElementById('inp_email').value;
    document.getElementById('linkedin').innerHTML = document.getElementById('inp_linkedin').value;
    
    document.getElementById('about').innerHTML = document.getElementById('inp_about').value;

    document.getElementById('edu_1').innerHTML = document.getElementById('inp_edu1').value;
    document.getElementById('edu_2').innerHTML = document.getElementById('inp_edu2').value;
    document.getElementById('edu_3').innerHTML = document.getElementById('inp_edu3').value;
    document.getElementById('edu_4').innerHTML = document.getElementById('inp_edu4').value;
    document.getElementById('edu_5').innerHTML = document.getElementById('inp_edu5').value;

    document.getElementById('exper_1').innerHTML = document.getElementById('inp_exp1').value;
    document.getElementById('exper_2').innerHTML = document.getElementById('inp_exp2').value;
    document.getElementById('exper_3').innerHTML = document.getElementById('inp_exp3').value;
    document.getElementById('exper_4').innerHTML = document.getElementById('inp_exp4').value;
    document.getElementById('exper_5').innerHTML = document.getElementById('inp_exp5').value;
    document.getElementById('exper_6').innerHTML = document.getElementById('inp_exp6').value;
    document.getElementById('exper_7').innerHTML = document.getElementById('inp_exp7').value;
    document.getElementById('exper_8').innerHTML = document.getElementById('inp_exp8').value;
    document.getElementById('exper_9').innerHTML = document.getElementById('inp_exp9').value;
    document.getElementById('exper_10').innerHTML = document.getElementById('inp_exp10').value;

    document.getElementById('cert_1').innerHTML = document.getElementById('inp_cert1').value;
    document.getElementById('cert_2').innerHTML = document.getElementById('inp_cert2').value;
    document.getElementById('cert_3').innerHTML = document.getElementById('inp_cert3').value;
    document.getElementById('cert_4').innerHTML = document.getElementById('inp_cert4').value;
    document.getElementById('cert_5').innerHTML = document.getElementById('inp_cert5').value;
    document.getElementById('cert_6').innerHTML = document.getElementById('inp_cert6').value;
    document.getElementById('cert_7').innerHTML = document.getElementById('inp_cert7').value;
    document.getElementById('cert_8').innerHTML = document.getElementById('inp_cert8').value;
    document.getElementById('cert_9').innerHTML = document.getElementById('inp_cert9').value;
    document.getElementById('cert_10').innerHTML = document.getElementById('inp_cert10').value;
    
    document.getElementById('skil_1').innerHTML = document.getElementById('inp_skil_1').value;
    document.getElementById('skil_2').innerHTML = document.getElementById('inp_skil_2').value;
    document.getElementById('skil_3').innerHTML = document.getElementById('inp_skil_3').value;
    document.getElementById('skil_4').innerHTML = document.getElementById('inp_skil_4').value;
    document.getElementById('skil_5').innerHTML = document.getElementById('inp_skil_5').value;
    document.getElementById('skil_6').innerHTML = document.getElementById('inp_skil_6').value;
    document.getElementById('skil_7').innerHTML = document.getElementById('inp_skil_7').value;
    document.getElementById('skil_8').innerHTML = document.getElementById('inp_skil_8').value;
    document.getElementById('skil_9').innerHTML = document.getElementById('inp_skil_9').value;
    document.getElementById('skil_10').innerHTML = document.getElementById('inp_skil_10').value;
    // console.log(skil_1,inp_skil_1);
    
    
};





                    // creat and save pdf

// var areacontent = document.getElementsByClassName('titles_content');
// var areacontentvalue = areacontent.value;
// console.log(areacontentvalue);





// var mydiv = document.getElementById('content');
            
function grneratepdf() {
// html2pdf(document.body).form().save();
// var element = document.getElementById('content');
// var opt = {
// margin:       1,
// filename:     'myfile.pdf',
// image:        { type: 'jpeg', quality: 0.98 },
// html2canvas:  { scale: 0 },
// jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
// };
// // New Promise-based usage:
// html2pdf().set(opt).from(element).save();
// // Old monolithic-style usage:
// html2pdf(element, opt);
var element = document.getElementById('cv_contaner');
html2pdf(element).form().save();
}


















             /////////// Start function of colors   //////////////////



                //  change colore of >> name

function nam_color() {
    document.getElementById("name").style.color =  document.getElementById('tite_color').value;
}; 


                //  change colore of >> job

function job_color() {
    // document.querySelector('h2').style.color = 'red'
    document.getElementById('job_title').style.color = document.getElementById('jobe_color').value; 
};

                //  change colore of >> titles

 function titls_color() {
    document.getElementById('t_about').style.color = document.getElementById('tits_color').value;
    document.getElementById('t_education').style.color = document.getElementById('tits_color').value ;
    document.getElementById('t_experience').style.color = document.getElementById('tits_color').value;
    document.getElementById('t_certificates').style.color = document.getElementById('tits_color').value;
    document.getElementById('t_skills').style.color = document.getElementById('tits_color').value;
} ;

                

                //  change colore of >> content

function parag_color() {
    // document.getElementById("cv_contaner").style.backgroundColor = "red";
    document.querySelector("div").style.color = document.getElementById('par_color').value;
} ;


function siz_rang() {
    document.getElementById("about").style.fontSize = document.getElementById('font_rang').value;
}

  /////////// End function of colors   //////////////////




             



/////////// Start function of size   //////////////////



        // change size font - name
var slider = document.getElementById("font_rang");
var output = document.getElementById("name");
// output.style.fontSize = slider.value;

slider.oninput = function() {
  output.style.fontSize = this.value / 2 + 'px';
}


        // change size font - job

var slider2 = document.getElementById("font_rang2");
var output2 = document.getElementById("job_title");
slider2.oninput = function() {
  output2.style.fontSize = this.value /4 + 'px';
}


        // change size font - titles 

// var slider3 = document.getElementById("font_rang3");
// var output3 = document.getElementById("about");
// // var output3 = document.getElementsByClassName("Education");
// // var output3 = document.querySelectorAll("p");
// // var output3 = document.getElementsByTagName("p");
// slider3.oninput = function() {
//   output3.style.fontSize = this.value + 'px';
// }
var slider3 = document.getElementById("font_rang3");
var output3 = document.getElementById("t_about");
slider3.oninput = function() {
  output3.style.fontSize = this.value /4 + 'px';
  document.getElementById("t_education").style.fontSize = this.value /4 + 'px';
  document.getElementById("t_experience").style.fontSize = this.value /4 + 'px';
  document.getElementById("t_certificates").style.fontSize = this.value /4 + 'px';
  document.getElementById("t_skills").style.fontSize = this.value /4 + 'px';
}





        // change size font -  paragraghs

// var slider3 = document.getElementById("font_rang3");
// var output3 = document.getElementById("about");
// // var output3 = document.getElementsByClassName("Education");
// // var output3 = document.querySelectorAll("p");
// // var output3 = document.getElementsByTagName("p");
// slider3.oninput = function() {
//   output3.style.fontSize = this.value + 'px';
// }
var slider4 = document.getElementById("font_rang4");
// var output4 = document.getElementById("about");
slider4.oninput = function() {
  // output4.style.fontSize = this.value /4 + 'px';
  // document.getElementById("about").style.fontSize = this.value /4 + 'px';
  document.getElementById("phone").style.fontSize = this.value /4 + 'px';
  document.getElementById("whatsup").style.fontSize = this.value /4 + 'px';
  document.getElementById("email").style.fontSize = this.value /4 + 'px';
  document.getElementById("linkedin").style.fontSize = this.value /4 + 'px';
  
  document.getElementById("about").style.fontSize = this.value /4 + 'px';
  
  document.getElementById("edu_1").style.fontSize = this.value /4 + 'px';
  document.getElementById("edu_2").style.fontSize = this.value /4 + 'px';
  document.getElementById("edu_3").style.fontSize = this.value /4 + 'px';
  document.getElementById("edu_4").style.fontSize = this.value /4 + 'px';
  document.getElementById("edu_5").style.fontSize = this.value /4 + 'px';
  
  document.getElementById("exper_1").style.fontSize = this.value /4 + 'px';
  document.getElementById("exper_2").style.fontSize = this.value /4 + 'px';
  document.getElementById("exper_3").style.fontSize = this.value /4 + 'px';
  document.getElementById("exper_4").style.fontSize = this.value /4 + 'px';
  document.getElementById("exper_5").style.fontSize = this.value /4 + 'px';
  document.getElementById("exper_6").style.fontSize = this.value /4 + 'px';
  document.getElementById("exper_7").style.fontSize = this.value /4 + 'px';
  document.getElementById("exper_8").style.fontSize = this.value /4 + 'px';
  document.getElementById("exper_9").style.fontSize = this.value /4 + 'px';
  document.getElementById("exper_10").style.fontSize = this.value /4 + 'px';
  
  document.getElementById("cert_1").style.fontSize = this.value /4 + 'px';
  document.getElementById("cert_2").style.fontSize = this.value /4 + 'px';
  document.getElementById("cert_3").style.fontSize = this.value /4 + 'px';
  document.getElementById("cert_4").style.fontSize = this.value /4 + 'px';
  document.getElementById("cert_5").style.fontSize = this.value /4 + 'px';
  document.getElementById("cert_6").style.fontSize = this.value /4 + 'px';
  document.getElementById("cert_7").style.fontSize = this.value /4 + 'px';
  document.getElementById("cert_8").style.fontSize = this.value /4 + 'px';
  document.getElementById("cert_9").style.fontSize = this.value /4 + 'px';
  document.getElementById("cert_10").style.fontSize = this.value /4 + 'px';
  
  document.getElementById("skil_1").style.fontSize = this.value /4 + 'px';
  document.getElementById("skil_2").style.fontSize = this.value /4 + 'px';
  document.getElementById("skil_3").style.fontSize = this.value /4 + 'px';
  document.getElementById("skil_4").style.fontSize = this.value /4 + 'px';
  document.getElementById("skil_5").style.fontSize = this.value /4 + 'px';
  document.getElementById("skil_6").style.fontSize = this.value /4 + 'px';
  document.getElementById("skil_7").style.fontSize = this.value /4 + 'px';
  document.getElementById("skil_8").style.fontSize = this.value /4 + 'px';
  document.getElementById("skil_9").style.fontSize = this.value /4 + 'px';
  document.getElementById("skil_10").style.fontSize = this.value /4 + 'px';
}


                  /////////// End function of size   //////////////////



      
                  /////////// End function of delat   //////////////////
// prompt('hiiii');
// if (prompt.value = '1') {
//   alert('1111');
// } else (prompt.value = '2') {
//   alert('2222');
// } ;


function delatall() {
  var pro = confirm('are you shour to delate all data if yes press yes. هل تريد حذف كل المحتوي؟');
  // alert(pro.value);

  if (pro === true ) {
    document.getElementById('inp_name').value = "";
    document.getElementById('inp_job').value = "";
    document.getElementById('inp_phone').value = "";
    document.getElementById('inp_whats').value = '';
    document.getElementById('inp_email').value = '';
    document.getElementById('inp_linkedin').value = '';
    
    document.getElementById('inp_about').value = "";
    document.getElementById('inp_edu1').value = "";
    document.getElementById('inp_edu2').value = "";
    document.getElementById('inp_edu3').value = "";
    document.getElementById('inp_edu4').value = "";
    document.getElementById('inp_edu5').value = "";
    document.getElementById('inp_exp1').value = "";
    document.getElementById('inp_exp2').value = "";
    document.getElementById('inp_exp3').value = "";
    document.getElementById('inp_exp4').value = "";
    document.getElementById('inp_exp5').value = "";
    document.getElementById('inp_exp6').value = "";
    document.getElementById('inp_exp7').value = "";
    document.getElementById('inp_exp8').value = "";
    document.getElementById('inp_exp9').value = "";
    document.getElementById('inp_exp10').value = "";
    document.getElementById('inp_cert1').value = "";
    document.getElementById('inp_cert2').value = "";
    document.getElementById('inp_cert3').value = "";
    document.getElementById('inp_cert4').value = "";
    document.getElementById('inp_cert5').value = "";
    document.getElementById('inp_cert6').value = "";
    document.getElementById('inp_cert7').value = "";
    document.getElementById('inp_cert8').value = "";
    document.getElementById('inp_cert9').value = "";
    document.getElementById('inp_cert10').value = "";
    document.getElementById('inp_skil_1').value = "";
    document.getElementById('inp_skil_2').value = "";
    document.getElementById('inp_skil_3').value = "";
    document.getElementById('inp_skil_4').value = "";
    document.getElementById('inp_skil_5').value = "";
    document.getElementById('inp_skil_6').value = "";
    document.getElementById('inp_skil_7').value = "";
    document.getElementById('inp_skil_8').value = "";
    document.getElementById('inp_skil_9').value = "";
    document.getElementById('inp_skil_10').value = "";
  
    alert('delate');
  } else {
    alert('noo');
  }
}

                  /////////// End function of delat   //////////////////





                  
