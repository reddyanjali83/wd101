let userForm=document.getElementById('user');
let arr=[];
const ret=()=>{
    let entry=JSON.parse(localStorage.getItem('arr'))||[];
    return entry;
}

const dis=()=>{
    let entry=ret();
    const tE=entry.map((input)=>{
        const namedata=`<td class='th'>${input.FullName}</td>`;
        const emaildata=`<td class='th'>${input.email}</td>`;
        const passworddata=`<td class='th'>${input.password}</td>`;
        const dobdata=`<td class='th'>${input.dob}</td>`;
        const termsdata=`<td class='th'>${input.terms}</td>`;
        const row=`<tr>${namedata} ${emaildata} ${passworddata} ${dobdata} ${termsdata}</tr>`;
        return row;
    }).join('\n');
    const tabBody=document.querySelector('#user-table tbody');
    tabBody.innerHTML=tE;
}
const abc = document.getElementById("dob");
abc.addEventListener("change", () =>
{
    let k=abc.value.split("-");
    let birthdate = new Date(k[0],k[1],k[2]);
    let today = new Date();
    let present_year= today.getFullYear();
    let birth_Year=birthdate.getFullYear()
    let age = present_year - birth_Year;
    let month_Diff = today.getMonth() - birthdate.getMonth();

    if ((today.getDate() < birthdate.getDate())||month_Diff<0) 
        {
        age--;
        }
    if (age<18 || age>55) 
        {
        abc.setCustomValidity("Age must be between 18 and 55");
        abc.reportValidity();
    }else
        {
        abc.setCustomValidity("");
        }
    }
);
const suf=(event)=>{
    event.preventDefault();
    const FullName = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const dob = document.getElementById('dob').value
    const terms = document.getElementById('terms').checked
    // var currentYear = new Date().getFullYear();
    // var birthYear = dob.split("-");
    // let year=birthYear[0]
    // var age = currentYear-year
    // if(age < 18 || age > 55){
    //     let k=document.getElementById('dob')
        
      
    //   return alert("Age must be between 18 and 55")
    // }
    // else
    // {
    // document.getElementById('dob')
    const input={
        FullName,email,password,dob,terms
    };
    arr=ret();
    arr.push(input);
    localStorage.setItem("arr",JSON.stringify(arr));
    dis();
    userForm.reset();
    }


userForm.addEventListener('submit',suf)
dis();
