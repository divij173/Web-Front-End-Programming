let form1 = document.forms.form_details;
let first_n = form1.elements.fname;
let last_n = form1.elements.lname;
let dob1 = form1.elements.dob;
let text_b = form1.elements.textarea;
let dropdown = form1.elements.drop_down;
let check_box = form1.elements.boxy;
let counter = 0;
// const first_name = form1.elements.fname.value;
first_n.addEventListener('blur',(event) => {
    const first_name = form1.elements.fname.value;
    if (first_name.length>2 && first_name.length<51 && counter==0)
    {
        counter=counter+1;
        text_b.value+="Hello "+first_name;
    }
    else
    {
        // console.log("Chheeee");
        text_b.value="Do not enter an invalid firstname";
    }
    
});

last_n.addEventListener('blur',(event) => {
    const last_name = form1.elements.lname.value;
    if (last_name.length>2 && last_name.length<51 && counter==1)
    {
        counter=counter+1;
        text_b.value+=" "+last_name;
    }
    else if (counter == 0)
    {
        text_b.value="Do not enter an invalid firstname";
    }
    else
    {
        // console.log("Chheeee");
        text_b.value="Do not enter an invalid lastname";
    }
    
});

dob1.addEventListener('blur',(event) => {
    const d_o_b = form1.elements.dob.value;
    const regex= "[0-9]{2}/[0-9]{2}/[0-9]{4}";
    if (d_o_b.match(regex) && counter == 2)
    {
        let year = Number(d_o_b.substr(6,4));
        let month = Number(d_o_b.substr(3,2))-1;
        let day = Number(d_o_b.substr(0,2));
        let date1 = year+month+day;
        let now = new Date();
        let age = now.getFullYear() - year;
        if (now.getMonth() <month || (now.getMonth() == month && now.getDate() < day))
        {
            age--;
        }

        text_b.value+=", you are "+age+" years old";
    }
    else if (counter == 0)
    {
        text_b.value="Do not enter an invalid firstname";
    }
    else if (counter == 1)
    {
        text_b.value="Do not enter an invalid lastname";
    }
    else
    {
        text_b.value="Do not enter an invalid date of birth"
    }
    

}); 
function myfunc() {
    const down_drop = form1.elements.drop_down.value;
    text_b.value+=", your favourite cheese is "+down_drop;
}

let endy="";
// check_box.addEventListener('click', (event) => {
    
// });
let stemp=0;
let qtemp=0;
function mycheck1() {
    const c1 = document.getElementById("check1");
    // const c2 = document.getElementById("check2");  

    if (stemp ==0)
    {
        stemp=1;
        text_b.value+=" and you've lived in ";
        qtemp=1;
    } 
    // let res = [];
    if (c1.checked === true)
    {
        let c11 = document.getElementById("check1").value;
        // res.push(c11);
        if (qtemp==1){
            qtemp=qtemp+1;
            text_b.value+=c11;
        }
        else
        {
            text_b.value+=", "+c11;
        }       
    }
}

function mycheck2() {
    const c2 = document.getElementById("check2");
    if (stemp ==0)
    {
        stemp=1;
        text_b.value+=" and you've lived in ";
        qtemp=1;
    }
    if (c2.checked === true)
    {
        let c22 = document.getElementById("check2").value;
        // res.push(c22);
        if (qtemp==1){
            qtemp=qtemp+1;
            text_b.value+=c22;
        }
        else
        {
            text_b.value+=", "+c22;
        }
    }
}
function mycheck3() {
    const c3 = document.getElementById("check3");
    if (stemp ==0)
    {
        stemp=1;
        text_b.value+=" and you've lived in ";
        qtemp=1;
    }
    if (c3.checked == true)
    {
        let c33 = document.getElementById("check3").value;
        // res.push(c33);
        if (qtemp==1){
            qtemp=qtemp+1;
            text_b.value+=c33;
        }
        else
        {
            text_b.value+=", "+c33;
        }
    } 
}
function mycheck4() {
    const c4 = document.getElementById("check4");
    if (stemp ==0)
    {
        stemp=1;
        text_b.value+=" and you've lived in ";
        qtemp=1;
    }
    if (c4.checked == true)
    {
        let c44 = document.getElementById("check4").value;
        // res.push(c44);
        if (qtemp==1){
            qtemp=qtemp+1;
            text_b.value+=c44;
        }
        else
        {
            text_b.value+=", "+c44;
        }
    }
}


form1.addEventListener('reset', (event) =>{
    counter=0;
    stemp=0;
    text_b.value=""
});

// form1.addEventListener('reset', (event) =>{
//     const first_name = form1.elements.fname.value;
//     const last_name = form1.elements.lname.value;
//     const d_o_b = form1.elements.dob.value;
//     const down_drop = form1.elements.drop_down.value;
    
//     // date of birth
//     const regex= "[0-9]{2}/[0-9]{2}/[0-9]{4}";
//     if (d_o_b.match(regex))
//     {
//         console.log("YAYYYYYY");
//     }
//     else
//     {
//         console.log("NAYYYYYY");
//     }

//     // checkbox
//     const c1 = document.getElementById("check1");
//     const c2 = document.getElementById("check2");
//     const c3 = document.getElementById("check3");
//     const c4 = document.getElementById("check4");

//     let res = [];
//     if (c1.checked === true)
//     {
//         let c11 = document.getElementById("check1").value;
//         res.push(c11);
//     }
//     if (c1.checked === true)
//     {
//         let c22 = document.getElementById("check2").value;
//         res.push(c22);
//     }
//     if (c3.checked == true)
//     {
//         let c33 = document.getElementById("check3").value;
//         res.push(c33);
//     }
//     if (c4.checked == true)
//     {
//         let c44 = document.getElementById("check4").value;
//         res.push(c44);
//     }
//     console.log(fname);
// });