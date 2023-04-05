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
    
    document.getElementById('skil_1').innerHTML = document.getElementById('inp_skil_1').value;
    document.getElementById('skil_2').innerHTML = document.getElementById('inp_skil_2').value;
    document.getElementById('skil_3').innerHTML = document.getElementById('inp_skil_3').value;
    document.getElementById('skil_4').innerHTML = document.getElementById('inp_skil_4').value;
    document.getElementById('skil_5').innerHTML = document.getElementById('inp_skil_5').value;
    document.getElementById('skil_6').innerHTML = document.getElementById('inp_skil_6').value;
    document.getElementById('skil_7').innerHTML = document.getElementById('inp_skil_7').value;
    document.getElementById('skil_8').innerHTML = document.getElementById('inp_skil_8').value;
    console.log(skil_1,inp_skil_1);
    
    
};





                    // creat and save pdf

var areacontent = document.getElementsByClassName('titles_content');
var areacontentvalue = areacontent.value;
console.log(areacontentvalue);





var mydiv = document.getElementById('content');
            
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