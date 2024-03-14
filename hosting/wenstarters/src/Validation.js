export default function Validation(value){
    const errors={}

    const table_number = /^[\w\s]{3,6}$/;
    const customer_name = /^[a-zA-Z]{2,}$/

    if(value.table_no===""){
        errors.table_no = "Table no is required"
    }
    else if(!table_number.test(value.table_no)){
        errors.table_no = "Enter a valid Table number"
    }

    if(value.cust_name===""){
        errors.cust_name = "Name is required"
    }
    else if(!customer_name.test(value.customer_name)){
        errors.cust_name = "Enter a valid Name"
    }

    if(!value.payment_mode){
        errors.payment_mode = "Please select a payment mode"
    }

    return errors;
}