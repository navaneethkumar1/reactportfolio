import "../Css/Contact.css";
function Contact(){
    return(
        <>
<div className="contact">
    <div className="table_container">
        <h1>Contact Me</h1>
        
            <form action="">

                
                <label>Name:</label>
                <input type="text" id="name" placeholder="Enter Your Name"/>
        
                
                <label>Email:</label>
                <input type="text" id="email" placeholder="Enter Your email"/>
            
                    <label>message</label>
                    <textarea row="20" column="30" placeholder="enter your message"></textarea>
            <div className="btn">
                    <button type="submit">Send Me</button>
            </div>
            </form>
        </div>
        </div>
        </>
    );
}
export default Contact;