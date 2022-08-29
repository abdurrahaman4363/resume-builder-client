import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
const CoverLetterDisplay5 = ({ formData, submitted }) => {
    const {
        name,
        email,
        address,
        linkedin,
        phone,
        designation,
        dear,
        professionalCareer,
        achievements,
        characteristics,
        signatureName

    }
        = formData;


    const generatePdf = () => {
        const input = document.getElementById('coverLetter');
        html2canvas(input, {
            quality: 4,
            scale: 5
        }).then(canvas => {
            // Few necessary setting options
            const imgWidth = 208;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            alert(imgHeight)
            const contentDataURL = canvas.toDataURL('image/png')
            const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
            const position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('new-file.pdf');
            // window.open(pdf.output('bloburl', { filename: 'new-file.pdf' }), '_blank');
        });

    }
    return (
        <div className='my-10 mb-96 bg-gray-100 shadow-xl'>
            <div className="card  bg-gray-100  ">
                <div className="card-body text-left ml-6 " id='coverLetter'>
                    <div className='dark:text-black'>
                        <div>
                            <h1 className='text-4xl text-gray-600 font-bold break-words '>{name}</h1>
                            <h1 className='text-2xl mt-2 text-gray-600 mb-2 font-bold break-words'>{designation}</h1>
                        </div>
                        <div className='text-left'>
                            <small className='font-semibold break-words'><i className="fa-solid fa-envelope "></i> {email}</small> <br />
                            <small className='font-semibold break-words'><i className="fa-solid fa-phone-flip "></i> {phone}</small> <br />
                            <small className='font-semibold break-words'><i className="fa-solid fa-location-dot"></i> {address}</small> <br />
                            <small className='font-semibold break-words'><i className="fa-brands fa-linkedin-in"></i> {linkedin}</small> <br />

                        </div>
                    </div>
                    {/* <div className='divider bg-pink-600'></div> */}

                    <div className='dark:text-black'>
                        <div className='border border-spacing-28  border-gray-400 h-1 bg-gray-300 border-none'></div>
                        <div >
                            <h2 className='text-xl font-bold break-words'>{dear}</h2>
                            <p className='break-words'>{professionalCareer}
                            </p>
                        </div>
                        <div className='mt-3'>
                            <p className='break-words'> {achievements}</p>
                        </div>
                        <div className='mt-3'>
                            <p className=' break-words'>{characteristics}
                            </p>
                        </div>

                        <div className="mt-10 mb-28 ">

                            <p className='text-xl break-words mb-3'>Sincerely.</p>
                            <p className='text-xl break-words'>{signatureName}</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='py-4 ml-8'>
                <button disabled={submitted == false}

                    className="btn btn-wide mt-8 btn-primary font-bold" onClick={generatePdf}>Dowload as pdf</button>
            </div>
        </div >
    );
};

export default CoverLetterDisplay5;