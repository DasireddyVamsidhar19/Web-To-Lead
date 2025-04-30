//inputDate outputDate

function handleSubmit(){
    let outputDate=document.querySelector('.outputDate')
    let inputDate=document.querySelector('.inputDate')

    let formattedDate=new Date(inputDate.value).toLocaleDateString('en-IN');
    outputDate.value=formattedDate;
}