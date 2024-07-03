import React, { useState } from 'react';
import Header from './header';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { CiUser } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";
import { LiaPhoneSolid } from "react-icons/lia";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const steps = [
    {
        label: "Personal Details",
        step: 1,
    },
    {
        label: "Contact Details",
        step: 2,
    },
    {
        label: "OTP Verification",
        step: 3,
    },
];
const Home = () => {

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [medium, setMedium] = useState('');
    const [classLevel, setClassLevel] = useState('');
    const [registerBy, setRegisterBy] = useState('');
    const [uniqueCode, setUniqueCode] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [addressline1, setAddressLine1] = useState('');
    const [addressline2, setAddressLine2] = useState('');
    const [state, setState] = useState('');
    const [message1, setMessage1] = useState('')
    const [message2, setMessage2] = useState('')
    const [message3, setMessage3] = useState('')
    const [message4, setMessage4] = useState('')
    const [message5, setMessage5] = useState('')
    const [message6, setMessage6] = useState('')
    const [message7, setMessage7] = useState('')
    const [message8, setMessage8] = useState('')
    const [message9, setMessage9] = useState('')
    const [emailmessage, setMessageEmail] = useState('')
    const [mobileerr, setMobileError] = useState('')
    const [address1err, setAddress1err] = useState('')
    const [address2err, setAddress2err] = useState('')
    const [stateerr, setStateerr] = useState('')

    const [message10, setMessage10] = useState('')
    const [isChecked, setIsChecked] = useState(false)


    const [showContactForm, setshowContactForm] = useState(false)
    const [showPersonalDetail, setshowPersonalDetail] = useState(true)
    const [showOtpverification, setShowOtpVerification] = useState(false)
    const [digit1, setdigit1] = useState('')
    const [digit2, setdigit2] = useState('')
    const [digit3, setdigit3] = useState('')
    const [digit4, setdigit4] = useState('')
    const [digit5, setdigit5] = useState('')
    const [digit6, setdigit6] = useState('')
    const [token, setToken] = useState('')

    const [activeStep, setActiveStep] = useState(1);

    const nextStep = () => {
        if (activeStep < steps.length) {
            setActiveStep(activeStep + 1);
        }
    };



    const totalSteps = steps.length;
    const width = `${(150 / totalSteps) * (activeStep - 1)}%`;


    // const SubminForm = () => {
    //     if (this.state.amount.trim() == "") {
    //         $(".my-fieldset").css("border", "1px solid black");
    //         $(".darkbor").css("border", "2px solid #373737");
    //         $(".errfield8").css("border", "1px solid red");
    //         $("#refundrequesterr").show();
    //         $("#refundrequesterr").text("Enter Amount");
    //     }
    //     else if (this.state.pin.trim() == "") {
    //         $(".my-fieldset").css("border", "1px solid black");
    //         $(".darkbor").css("border", "2px solid #373737");
    //         $(".errfield9").css("border", "1px solid red");
    //         $("#refundrequesterr").show();
    //         $("#refundrequesterr").text("Enter pin");
    //     } else {
    //         // $(".rejectresblack").css("border", "1px solid black")
    //         // $(".bterr").hide()
    //         // $("#editsubmitaccept").hide();
    //         // $("#editsubmitloaderaccept").show();
    //         $("#refundrequesterr").hide()
    //         $(".accreqbtn").hide()
    //         $(".acceptrequest").show();
    //         $(".my-fieldset").css("border", "1px solid black")
    //         $(".darkbor").css("border", "2px solid #373737")

    //         axios
    //             .post(
    //                 `${baseUrl}p=acceptAgentIdReq`, //acceptDocument
    //                 {
    //                     AdminID: DecadminId,
    //                     acceptPin: this.state.pin,
    //                     agentID: this.state.agentId,
    //                     transactionID: this.state.transactionNo,
    //                     payment_id: this.state.paymentid,
    //                     paymentAmount: this.state.amount,
    //                     paymentMode: this.state.paymentmode,
    //                     shortCode: "ACPTAGIDREQ",
    //                     accountNumber: this.state.accountnumber,
    //                     gstnumber: ""

    //                     //           viewdetailsdata: data,
    //                     //     currentidtype: data.currentIDType,
    //                     //     requestidtype: data.requestIdType,
    //                     //     paymentmode: data.paymentMode,
    //                     //     agentid:data.agentID,
    //                     //     transactionNo:data.transactionID,
    //                     // paymentid:data.payment_ID,
    //                     // paymentmode:data.paymentMode,
    //                     // accountnumber:data.accountNumber,
    //                     // gstnumber:data.gstnumber,


    //                 },
    //                 {
    //                     headers: {
    //                         Authkey: process.env.REACT_APP_API_KEY,
    //                         "App-Token-Access": Decjwttoken,
    //                     },
    //                     auth: {
    //                         username: process.env.REACT_APP_API_USERNAME,
    //                         password: process.env.REACT_APP_API_PASSWORD,
    //                     },
    //                 }
    //             )
    //             .then((res) => {

    //                 if (res.data.code == "200" && res.data.status == "success") {
    //                     $(".reserr").hide();
    //                     $("#refundrequesterr").hide()

    //                     $(".accreqbtn").show()
    //                     this.fetchData();
    //                     this.showNotification(res.data.message);
    //                     $(".acceptrequest").hide();
    //                     $("#acceptdetailspopup").modal("hide");
    //                     this.closeAcceptRequest();
    //                 }
    //                 else if (
    //                     res.data.code == "201" &&
    //                     res.data.status == "fail"
    //                 ) {

    //                     // $(".bterr").show()
    //                     // $(".btrefundrequesterrerr").show()
    //                     // $(".bterr").text(res.data.message)
    //                     // $(".refundrequesterr").text(res.data.message)
    //                     // $("#editsubmitaccept").show();
    //                     // $("#editsubmitloaderaccept").hide();
    //                     $("#refundrequesterr").show()
    //                     $("#refundrequesterr").text(res.data.message)
    //                     $(".accreqbtn").show()
    //                     $(".acceptrequest").hide();
    //                 } else if (
    //                     res.data.code == "201" &&
    //                     res.data.status == "invalidauth"
    //                 ) {
    //                     this.logout();
    //                 } else {
    //                     $(".acceptmodal").modal("hide");
    //                     this.showNotification(res.data.message);
    //                 }
    //             })
    //             .catch((err) => {
    //                 $("#refundrequesterr").show()
    //                 $("#refundrequesterr").text("Something went wrong")
    //                 $(".accreqbtn").show()
    //                 $(".acceptrequest").hide();
    //             });
    //     }
    // };
    const handleRegisterBy = (e) => {

        if (e.target.value.length >= 0) {
            setMessage9('')
            setRegisterBy(e.target.value)

        } else {
            setMessage9(message9)
        }


    }

    const PersonalDetail = (e) => {

        e.preventDefault()
        if (firstName == "") {
            setMessage1("please Enter FirstName")
        } else if (middleName == "") {
            setMessage2("please Enter Middle Name")
        } else if (lastName == "") {
            setMessage3("please Enter Last Name")
        } else if (dateOfBirth == "") {
            setMessage4("please Enter DOB")
        } else if (gender == "") {
            setMessage5("please Enter gender")
        } else if (schoolName == "") {
            setMessage6("please Enter schoolName")
        } else if (medium == "") {
            setMessage7("please Select medium")
        } else if (classLevel == "") {
            setMessage8("please Select Level")
        } else if (registerBy == "") {
            setMessage9("please Select Register By")
        } else if (registerBy == "Coordinator" && uniqueCode == "") {
            setMessage10("please Enter uniqueCode")
        } else {
            console.log('Submit')
            nextStep()
            setshowContactForm(true)
            setshowPersonalDetail(false)

        }

    }
    const ContactDetails = (e) => {
        e.preventDefault()
        const contactNoregex = /^[6-9]\d{9}$/;
        const emailregex = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (email === "") {
            setMessageEmail("Please enter Email");
        } else if (!emailregex.test(email)) {
            setMessageEmail("Please enter valid Email");
        } else if (mobileNo === "") {
            setMobileError("Please enter Mobile Number.");
        } else if (!contactNoregex.test(mobileNo)) {
            setMobileError("Please enter valid Mobile Number");
        } else if (addressline1 === "") {
            setAddress1err("Please enter Address");
        } else if (addressline2 === "") {
            setAddress2err("Please enter Address");
        } else if (state === "") {
            setStateerr("Please enter State");
        } else if (!isChecked) {
            alert('Please agree to the Terms and Conditions.');
        } else {
            axios
                .post(
                    `http://learnachieveapi.dollopinfotech.com/user/register`,
                    {
                        firstName: firstName,
                        middleName: middleName,
                        lastName: lastName,
                        dateOfBirth: dateOfBirth,
                        gender: gender,
                        schoolName: schoolName,
                        class: classLevel,
                        medium: medium,
                        email: email,
                        mobile: mobileNo,
                        addressLineOne: addressline1,
                        addressLineTwo: addressline2,
                        state: state,
                        registerBy: registerBy,
                        referralCode: uniqueCode == "" ? "" : uniqueCode
                    },

                )
                .then(async (res) => {
                    console.log(res.status)
                    if (res.status == 200 && res.data.message == "OTP Sent Successfully") {
                        nextStep()
                        setshowContactForm(false)
                        setshowPersonalDetail(false)
                        setShowOtpVerification(true)
                        setToken(res.data.token)

                    }
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }
    const OtpSubmit = (e) => {
        e.preventDefault();
        const otp = `${digit1}${digit2}${digit3}${digit4}${digit5}${digit6}`;


        axios.post(
            'http://learnachieveapi.dollopinfotech.com/user/verify-otp-registration',
            {
                otp: otp,
            },
            {
                headers: {

                    Authorization: `Bearer ${token}`
                }
            },
        )
            .then((res) => {
               
                console.log(res, 'sdfvasd')
                if (res.status == 200 && res.data.message == "User Registered Successfully!") {

                    toast.success(res.data.message)
                    setdigit1("")
                    setdigit2("")
                    setdigit3("")
                    setdigit4("")
                    setdigit5("")
                    setdigit6("")
                }


            })
            .catch((err) => {
                toast.error(err.response.data.error)



            });
    };
    return (
        <div className='main'>
            <img src='/img/hero section 8 (1).png' className='w-100' alt='Hero section'></img>

            {/* <div className='row pt-5 mx-0 stepsdiv'>
                <div className='col-md-4 col-sm-4 col-lg-4 d-flex justify-content-center'>
                    <div className='iconimg'>
                        <div>
                        <CiUser className='fs-2'/>
                        </div>
                    </div>
                    <div className='line1'>
                        <img src='/img/Line 95.png' alt='Line'></img>
                    </div>
                </div>
                <div className='col-md-4 col-sm-4 col-lg-4 d-flex'>
                    <div className='iconimg'>
                        <img src='/img/Group 3198.png' alt='Step 2'></img>
                    </div>
                    <div className='line2'>
                        <img src='/img/Line 95.png' alt='Line'></img>
                    </div>
                </div>
                <div className='col-md-4 col-sm-4 col-lg-4'>
                    <div className='iconimg'>
                        <img src='/img/Group 3199.png' alt='Step 3'></img>
                    </div>
                </div>
            </div> */}
            <div className='mt-5 container'>
                <div className="main-container">
                    <div className="step-container" style={{ '--width': width }}>
                        {steps.map(({ step, label }) => (
                            <div className="step-wrapper" key={step}>
                                <div
                                    className="step-style"
                                    style={{
                                        '--border-color': activeStep >= step ? '#f6821f' : '#F3E7F3',
                                    }}
                                >
                                    {activeStep >= step ? (
                                        <div className="check-mark">{step == 1 ? <CiUser className='stepicon-1' /> : step == 2 ? <LiaPhoneSolid className='stepicon-1' /> : step == 3 ? <AiOutlineUserAdd className='stepicon-1' /> : <CiUser className='stepicon-1' />}</div>
                                    ) : (
                                        <span className="step-count">{step == 1 ? <CiUser className='stepicon-1' /> : step == 2 ? <LiaPhoneSolid className='stepicon-1' /> : step == 3 ? <AiOutlineUserAdd className='stepicon-1' /> : <CiUser className='stepicon-1' />}</span>
                                    )}
                                </div>
                                <div className="steps-label-container">
                                    <span className="step-label">{label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="buttons-container">
                        <button className="button-style" onClick={prevStep} disabled={activeStep === 1}>
                            Previous
                        </button>
                        <button className="button-style" onClick={nextStep} disabled={activeStep === totalSteps}>
                            Next
                        </button>
                    </div> */}
                </div>
            </div>



            <div className='underline1 container pe-5 py-3 mt-5'>
                <img src='/img/Line 101.png' className='w-100 pe-4' alt='Underline'></img>
            </div>
            {showPersonalDetail ?
                <form className=' personaldetails container' onSubmit={(e) => PersonalDetail(e)}>
                    <h3 className='text-start pb-3'>Personal Details</h3>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='mb-3 text-start'>
                                <label htmlFor='firstName' className='form-label fw-bold'>First Name</label>
                                <input
                                    type='text'
                                    className='form-control border-0 border-bottom'
                                    id='firstName'
                                    name='firstName'
                                    placeholder='Enter your first name'
                                    value={firstName}
                                    onChange={(e) => {
                                        if (e.target.value.length >= 0) {
                                            setMessage1('')
                                            setFirstName(e.target.value)

                                        } else {
                                            setMessage1(message1)
                                        }
                                    }}
                                />
                            </div>
                            <p className='text-danger text-start '>{message1}</p>
                        </div>

                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='mb-3 text-start'>
                                <label htmlFor='middleName' className='form-label fw-bold'>Middle Name</label>
                                <input
                                    type='text'
                                    className='form-control border-0 border-bottom'
                                    id='middleName'
                                    name='middleName'
                                    placeholder='Enter your middle name'
                                    value={middleName}
                                    onChange={(e) => {
                                        if (e.target.value.length >= 0) {
                                            setMessage2('')
                                            setMiddleName(e.target.value)

                                        } else {
                                            setMessage2(message2)
                                        }
                                    }}
                                />
                            </div>
                            <p className='text-danger text-start '>{message2}</p>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='mb-3 text-start'>
                                <label htmlFor='lastName' className='form-label fw-bold'>Last Name</label>
                                <input
                                    type='text'
                                    className='form-control border-0 border-bottom'
                                    id='lastName'
                                    name='lastName'
                                    placeholder='Enter your last name'
                                    value={lastName}
                                    onChange={(e) => {
                                        if (e.target.value.length >= 0) {
                                            setMessage3('')
                                            setLastName(e.target.value)

                                        } else {
                                            setMessage3(message3)
                                        }
                                    }}
                                />
                            </div>
                            <p className='text-danger text-start '>{message3}</p>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='mb-3 text-start'>
                                <label htmlFor='dateOfBirth' className='form-label fw-bold'>Date Of Birth</label>
                                <input
                                    type='date'
                                    className='form-control border-0 border-bottom'
                                    id='dateOfBirth'
                                    name='dateOfBirth'
                                    placeholder='Enter your DOB'
                                    value={dateOfBirth}
                                    onChange={(e) => {
                                        if (e.target.value.length >= 0) {
                                            setMessage4('')
                                            setDateOfBirth(e.target.value)

                                        } else {
                                            setMessage4(message4)
                                        }
                                    }}
                                />
                            </div>
                            <p className='text-danger text-start '>{message4}</p>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='mb-3 text-start'>
                                <label htmlFor='gender' className='form-label fw-bold'>Gender</label>
                                <Form.Select
                                    aria-label='Default select example'
                                    className='border-0 border-bottom'
                                    id='gender'
                                    name='gender'
                                    value={gender}
                                    onChange={(e) => {
                                        if (e.target.value.length >= 0) {
                                            setMessage5('')
                                            setGender(e.target.value)

                                        } else {
                                            setMessage5(message2)
                                        }
                                    }}
                                >
                                    <option>Select Gender</option>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                    <option value='Other'>Other</option>
                                </Form.Select>
                            </div>
                            <p className='text-danger text-start '>{message5}</p>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='mb-3 text-start'>
                                <label htmlFor='schoolName' className='form-label fw-bold'>School Name</label>
                                <input
                                    type='text'
                                    className='form-control border-0 border-bottom'
                                    id='schoolName'
                                    name='schoolName'
                                    placeholder='Enter your School Name'
                                    value={schoolName}
                                    onChange={(e) => {
                                        if (e.target.value.length >= 0) {
                                            setMessage6('')
                                            setSchoolName(e.target.value)

                                        } else {
                                            setMessage6(message6)
                                        }
                                    }}
                                />
                            </div>
                            <p className='text-danger text-start '>{message6}</p>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='mb-3 text-start'>
                                <label htmlFor='medium' className='form-label fw-bold'>Medium</label>
                                <Form.Select
                                    aria-label='Default select example'
                                    className='border-0 border-bottom'
                                    id='medium'
                                    name='medium'
                                    value={medium}
                                    onChange={(e) => {
                                        if (e.target.value.length >= 0) {
                                            setMessage7('')
                                            setMedium(e.target.value)

                                        } else {
                                            setMessage7(message2)
                                        }
                                    }}
                                >
                                    <option>Select Medium</option>
                                    <option value='CBSE'>CBSE</option>
                                    <option value='ICSE'>ICSE</option>
                                    <option value='Other'>Other</option>
                                </Form.Select>
                            </div>
                            <p className='text-danger text-start '>{message7}</p>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='mb-3 text-start'>
                                <label htmlFor='class' className='form-label fw-bold'>Class</label>
                                <Form.Select
                                    aria-label='Default select example'
                                    className='border-0 border-bottom'
                                    id='class'
                                    name='class'
                                    value={classLevel}
                                    onChange={(e) => {
                                        if (e.target.value.length >= 0) {
                                            setMessage8('')
                                            setClassLevel(e.target.value)

                                        } else {
                                            setMessage8(message2)
                                        }
                                    }}
                                >
                                    <option>Select Class</option>
                                    <option value='1'>1st</option>
                                    <option value='2'>2nd</option>
                                    <option value='Other'>Other</option>
                                </Form.Select>
                            </div>
                            <p className='text-danger text-start '>{message8}</p>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='mb-3 text-start'>
                                <label htmlFor='registerBy' className='form-label fw-bold'>Register By</label>
                                <Form.Select
                                    aria-label='Default select example'
                                    className='border-0 border-bottom'
                                    id='registerBy'
                                    name='registerBy'
                                    value={registerBy}
                                    onChange={handleRegisterBy}
                                >
                                    <option>Select</option>
                                    <option value='Student'>Student</option>
                                    <option value='Coordinator'>Coordinator</option>
                                </Form.Select>
                            </div>
                            <p className='text-danger text-start '>{message9}</p>
                        </div>
                        {
                            registerBy == "Coordinator" ?
                                <>
                                    <div className='col-lg-4 col-md-4 col-12'>
                                        <div className='mb-3 text-start'>
                                            <label htmlFor='uniqueCode' className='form-label fw-bold'>Unique Code</label>
                                            <input
                                                type='text'
                                                className='form-control border-0 border-bottom'
                                                id='uniqueCode'
                                                name='uniqueCode'
                                                placeholder='Enter Unique Code'
                                                value={uniqueCode}
                                                onChange={(e) => {
                                                    if (e.target.value.length >= 0) {
                                                        setMessage10('')
                                                        setUniqueCode(e.target.value)

                                                    } else {
                                                        setMessage10(message10)
                                                    }
                                                }}
                                            />
                                        </div>
                                        <p className='text-danger text-start '>{message10}</p>
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-12'></div>
                                    <div className='col-lg-4 col-md-4 col-12 align-self-center text-end'>
                                        <button type='button' className='btn px-5 rounded-pill' onClick={PersonalDetail} style={{ backgroundColor: '#F6821F' }}>Next</button>
                                    </div>
                                </>
                                : <div className='col-lg-12 col-12 align-self-center text-end'>
                                    <button type='button' className='btn px-5 rounded-pill' onClick={PersonalDetail} style={{ backgroundColor: '#F6821F' }}>Next</button>
                                </div>
                        }

                    </div>
                </form>
                : null
            }


            {
                showContactForm == true ?
                    <form className=' contactdetails container' onSubmit={(e) => ContactDetails(e)}>
                        <h3 className='text-start pb-3'>Contact Details</h3>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-12'>
                                <div className='mb-3 text-start'>
                                    <label htmlFor='email' className='form-label fw-bold'>Email</label>
                                    <input
                                        type='text'
                                        className='form-control border-0 border-bottom'
                                        id='email'
                                        name='email'
                                        placeholder='Enter your Email id'
                                        value={email}
                                        onChange={(e) => {
                                            if (e.target.value.length >= 0) {
                                                setMessageEmail('')
                                                setEmail(e.target.value)

                                            } else {
                                                setMessageEmail(emailmessage)
                                            }
                                        }}
                                    />
                                </div>
                                <p className='text-danger text-start '>{emailmessage}</p>
                            </div>

                            <div className='col-lg-4 col-md-4 col-12'>
                                <div className='mb-3 text-start'>
                                    <label htmlFor='mobno' className='form-label fw-bold'>Mobile</label>
                                    <input
                                        type='text'
                                        className='form-control border-0 border-bottom'
                                        id='mobno'
                                        name='mobno'
                                        placeholder='Enter your mobile number'
                                        value={mobileNo}
                                        onChange={(e) => {
                                            if (e.target.value.length >= 0) {
                                                setMobileError('')
                                                setMobileNo(e.target.value)

                                            } else {
                                                setMobileError(mobileerr)
                                            }
                                        }}
                                    />
                                </div>
                                <p className='text-danger text-start '>{mobileerr}</p>
                            </div>
                            <div className='col-lg-4 col-md-4 col-12'>
                                <div className='mb-3 text-start'>
                                    <label htmlFor='address1' className='form-label fw-bold'>Address Line-1</label>
                                    <input
                                        type='text'
                                        className='form-control border-0 border-bottom'
                                        id='address1'
                                        name='address1'
                                        placeholder='Enter your address'
                                        value={addressline1}
                                        onChange={(e) => {
                                            if (e.target.value.length >= 0) {
                                                setAddress1err('')
                                                setAddressLine1(e.target.value)

                                            } else {
                                                setAddress1err(address1err)
                                            }
                                        }}
                                    />
                                </div>
                                <p className='text-danger text-start '>{address1err}</p>
                            </div>
                            <div className='col-lg-4 col-md-4 col-12'>
                                <div className='mb-3 text-start'>
                                    <label htmlFor='address2' className='form-label fw-bold'>Address Line-2</label>
                                    <input
                                        type='text'
                                        className='form-control border-0 border-bottom'
                                        id='address2'
                                        name='address2'
                                        placeholder='Enter your address'
                                        value={addressline2}
                                        onChange={(e) => {
                                            if (e.target.value.length >= 0) {
                                                setAddress2err('')
                                                setAddressLine2(e.target.value)

                                            } else {
                                                setAddress2err(address2err)
                                            }
                                        }}
                                    />
                                </div>
                                <p className='text-danger text-start '>{address2err}</p>
                            </div>
                            <div className='col-lg-4 col-md-4 col-12'>
                                <div className='mb-3 text-start'>
                                    <label htmlFor='state' className='form-label fw-bold'>State</label>
                                    <Form.Select
                                        aria-label='Default select example'
                                        className='border-0 border-bottom'
                                        id='state'
                                        name='state'
                                        value={state}
                                        onChange={(e) => {
                                            if (e.target.value.length >= 0) {
                                                setStateerr('')
                                                setState(e.target.value)

                                            } else {
                                                setStateerr(stateerr)
                                            }
                                        }}
                                    >
                                        <option>Select State</option>
                                        <option value='667278109dd5c5d79a6ff62c'>Andaman & Nicobar Islands</option>
                                        <option value='6672780f9dd5c5d79a6ff584'>Andhra Pradesh</option>
                                        <option value='667278109dd5c5d79a6ff5f8'>Arunachal Pradesh</option>
                                    </Form.Select>
                                </div>
                                <p className='text-danger text-start '>{stateerr}</p>
                            </div>
                        </div>
                        <div className='row py-4'>
                            <div className='col-lg-6 col-md-6 col-12  text-start'>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={isChecked}
                                        id="flexCheckDefault"
                                        onChange={(e) => setIsChecked(e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        I agree to these Terms and Conditions
                                    </label>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12  text-end'>
                                <button type='button' className='btn px-5 rounded-pill' onClick={(e) => ContactDetails(e)} style={{ backgroundColor: '#F6821F' }}>Next</button>
                            </div>
                        </div>


                    </form> : null
            }
            {
                showOtpverification == true ?
                    <div className=' otpvarification container'>
                        <h3 className='text-start pb-3'>OTP Verification</h3>
                        <p className='text-start'>A One-Time Password has been sent to xxxxxxxx96 and leaxxxxxxxxxxxx@gmai</p>
                        <div className="row gx-0">
                            <div className="col-12 pl-0">
                                <div className="loginotphrline"></div>
                                <p className="text-start fw-bold mt-3"> OTP</p>
                                <div className="opinputcontainer">
                                    <input
                                        className="otpinput2  otpinput "
                                        type="tel"
                                        maxlength="1"
                                        value={digit1}
                                        onChange={(e) => setdigit1(e.target.value)}

                                    />
                                    <input
                                        className="otpinput2  otpinput"
                                        type="tel"
                                        maxlength="1"
                                        value={digit2}
                                        onChange={(e) => setdigit2(e.target.value)}

                                    />
                                    <input
                                        className="otpinput2  otpinput"
                                        type="tel"
                                        maxlength="1"
                                        value={digit3}
                                        onChange={(e) => setdigit3(e.target.value)}

                                    />
                                    <input
                                        className="otpinput2  otpinput"
                                        type="tel"
                                        maxlength="1"
                                        value={digit4}
                                        onChange={(e) => setdigit4(e.target.value)}

                                    />
                                    <input
                                        className="otpinput2  otpinput"
                                        type="tel"
                                        maxlength="1"
                                        value={digit5}
                                        onChange={(e) => setdigit5(e.target.value)}

                                    />
                                    <input
                                        className="otpinput2  otpinput"
                                        type="tel"
                                        maxlength="1"
                                        value={digit6}
                                        onChange={(e) => { setdigit6(e.target.value) }}

                                    />
                                </div>
                            </div>
                        </div>
                        <div className='row text-start '>
                            <div className='col-md-3'>02:35</div>
                            <div className='col-md-9'>
                                <div className='border-0 fw-bold' onClick={(e) => ContactDetails(e)} style={{ color: "#f68215", cursor: "pointer" }}>Resend OTP</div>
                            </div>
                        </div>

                        <div className='col-lg-12 col-12  text-end'>
                            <button type='button' className='btn px-5 rounded-pill' onClick={(e) => OtpSubmit(e)} style={{ backgroundColor: '#F6821F' }}>Submit</button>
                        </div>
                    </div> : null
            }
            <ToastContainer />
        </div>


    );
}

export default Home;
