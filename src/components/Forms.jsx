import React, { Component } from "react";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
export const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      email: null,
      last_name: null,
      message: null,
      formValid: false,
      errors: {
        first_name: "",
        email: "",
        last_name: "",
        message: "",
      },
    };
    
  }

  updateState=()=>{ 
    // Changing state 
    this.setState({formvalid : 
                 true}) 
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    console.log(this.state.formValid)
    if(errors.last_name&&errors.first_name&&errors.message&&errors.email){
      this.updateState()
      
    }
    switch (name) {
      case "first_name":
        errors.first_name =
          value.length < 3
            ? "First Name must be at least 3 characters long!"
            : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "last_name":
        errors.last_name =
          value.length < 3
            ? "Password must be at least 3 characters long!"
            : "";
        break;
      case "message":
        errors.message = value.length < 5 ? "Please enter a message" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, this.validateForm);
  };


  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validateForm(this.state.errors)) {
      console.info("Valid Form");
      this.setState({ formValid: true });
    } else {
      console.info("invalid form");
    }
  };

  forms = [
    {
      type: "text",
      id: "first_name",
      placeholder: "Enter your first name",
      label: "First name",
    },
    {
      type: "text",
      id: "last_name",
      placeholder: "Enter your last name",
      label: "Last name",
    },
    {
      type: "Email",
      id: "email",
      placeholder: "yourname@email.com",
      label: "Email",
    },
    {
      type: "text",
      id: "message",
      placeholder:
        "Send me a message and I'll reply you as soon as possible...",
      label: "Message",
    },
  ];

  render() {
    const { errors } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        noValidate
        className='flex w-full   flex-col gap-12'>
        <div className='flex flex-col gap-6 md:gap-8'>
          <div className='flex flex-col gap-6 justify-between   md:flex-row md:gap-6'>
            <div className='flex flex-col w-full gap-[6px]'>
              <label
                htmlFor={this.forms[0].type}
                className='block inputText text-[#344054]'>
                {this.forms[0].label}
              </label>
              <input
                type={this.forms[0].id}
                id={this.forms[0].id}
                name={this.forms[0].id}
                className=' border-[#D0D5DD] border rounded-lg focus:outline-none    text-[#101828] h-11  focus:ring-[#84CAFF] focus:border-[#84CAFF] block w-full py-2.5 px-[14px] '
                placeholder={this.forms[0].placeholder}
                onChange={this.handleChange}
                noValidate
              />
              {errors.first_name.length > 0 && (
                <p className='text4 text-[#475467]'>{errors.first_name}</p>
              )}
            </div>
            <div className='flex flex-col w-full  gap-[6px]'>
              <label
                htmlFor={this.forms[1].id}
                className='block inputText text-[#344054]'>
                {this.forms[1].label}
              </label>
              <input
                type={this.forms[1].type}
                id={this.forms[1].id}
                name={this.forms[1].id}
                className=' border-[#D0D5DD] rounded-lg border text-[#101828] h-11 focus:outline-none  focus:ring-[#84CAFF] focus:border-[#84CAFF] block w-full py-2.5 px-[14px] '
                placeholder={this.forms[1].placeholder}
                onChange={this.handleChange}
                noValidate
              />
              {errors.last_name.length > 0 && (
                <p className='text4 text-[#475467]'>{errors.last_name}</p>
              )}
            </div>
          </div>
          <div className='flex flex-col w-full gap-[6px]'>
            <label
              htmlFor={this.forms[2].type}
              className='block inputText text-[#344054]'>
              {this.forms[2].label}
            </label>
            <input
              type={this.forms[2].id}
              id={this.forms[2].id}
              name={this.forms[2].id}
              className=' border-[#D0D5DD] border focus:outline-none   ring-0 rounded-lg  text-[#101828] h-11  focus:ring-[#84CAFF] focus:border-[#84CAFF] block w-full py-2.5 px-[14px] '
              placeholder={this.forms[2].placeholder}
              onChange={this.handleChange}
              noValidate
            />
            {errors.email.length > 0 && (
              <p className='text4 text-[#475467]'>{errors.email}</p>
            )}
          </div>
          <div className='flex flex-col w-full gap-[6px]'>
            <label
              htmlFor={this.forms[3].id}
              className='block inputText text-[#344054]'>
              {this.forms[3].label}
            </label>
            <textarea
              id={this.forms[3].id}
              name={this.forms[3].id}
              className={
                errors.message.length > 0
                  ? "focus:ring-[#143AFF] border-[#F89687] focus:outline-[#F89687] focus-visible:border-[#ffCAFF]"
                  : "border-[#D0D5DD] focus:outline-none  border ring-0 rounded-lg  text-[#101828]   focus:ring-[#84CAFF] focus-visible:border-[#84CAFF] block w-full py-2.5 px-[14px] "
              }
              onChange={this.handleChange}
              placeholder={this.forms[3].placeholder}
              rows={4}></textarea>
            {!this.state.formValid && (
              <p className='text4 text-[#F83F23]'>{errors.message}</p>
            )}
          </div>
          <div className='flex gap-3 md:gap-8 md:item-center'>
            <input
              id='default-checkbox'
              type='checkbox'
              value=''
              className='w-5 h-5 rounded-[6px] bg-[#FFFFFF] accent-[#fffF] text-[#ffffff]  border-[#1570EF] focus:bg-[#ffffff] focus:ring-[#1570EF]  focus:ring-2 '
            />
            <label
              htmlFor='default-checkbox'
              className='lastText text-[#475467] '>
              {"You agree to providing your data to {name} who may contact you"}
            </label>
          </div>
        </div>
        <button
          disabled={this.state.formValid}
          id='btn__submit'
          className={
            !this.state.formValid
              ? "flex justify-center gap-2 rounded-lg bg-[#1570EF] py-3 px-20"
              : "flex justify-center gap-2 rounded-lg bg-[#1570EF] py-3 px-20 cursor-not-allowed"
          }>
          <div className='buttonText text-white'>Send message</div>
        </button>
      </form>
    );
  }
}

export default Forms;
