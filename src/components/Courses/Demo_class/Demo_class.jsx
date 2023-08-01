import React from 'react'
import '../Demo_class/Demo_class.css';
const Demo_class = () => {
  return (
    <div>
        <div className="contactContainer">
			<h2 className="titleContact">Contact Us</h2>
			<div className="formContainer">
				<form name="contact" className="contact-inform form">
					<div className="oneSection">
						<div className="form-control">
							<input
								type="text"
								name="firstname"
								className="form-input"
								placeholder="none"
								required
							/>
							<label htmlFor="firstname" className="form-label">
								First Name
							</label>
						</div>
						<div className="form-control">
							<input
								type="text"
								name="lastname"
								className="form-input"
								placeholder="none"
								required
							/>
							<label htmlFor="firstname" className="form-label">
								Last Name
							</label>
						</div>
					</div>

					<div className="oneSection">
						<div className="form-control">
							<input
								type="email"
								name="email"
								className="form-input"
								placeholder="none"
								required
							/>
							<label htmlFor="email" className="form-label">
								Email
							</label>
						</div>
						<div className="form-control">
							<input
								type="number"
								name="phoneNumber"
								className="form-input"
								placeholder="none"
								required
							/>
							<label htmlFor="phoneNumber" className="form-label">
								Phone Number
							</label>
						</div>
					</div>

					<div className="form-control">
						<textarea
							name="message"
							className="form-input"
							placeholder="none"
							required
						/>
						<label htmlFor="message" className="form-label">
							Message
						</label>
					</div>
					<button type="submit" className="submitButton">
						Send Message
					</button>
				</form>
			</div>
		</div>
    </div>
  )
}

export default Demo_class