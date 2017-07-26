import React from 'react';

require('./formStyle.css');

const Info = ({ onSubmit, OnChange, errors, successMessage, user }) => (
	<div className="row justify-content-left">
		<div className="card" id="cardborder">
			<div className="card-block">
				<form action="" method="post" id="formborder">
					<div className="form-group">
						<div className="input-group input-group-sm">
							<label for="inputInfo" class="col-sm-2 col-form-label col-form-label-sm">
								User Name
							</label>
							<input type="text" id="inputInfo" name="username3" className="form-control" />
							<span className="input-group-addon">
								<i className="fa fa-user" />
							</span>
						</div>
					</div>

					<div className="form-group">
						<div className="input-group input-group-sm">
							<span className="input-group-addon">Email</span>
							<input type="email" id="inputInfo" name="email3" className="form-control" />
							<span className="input-group-addon">
								<i className="fa fa-envelope" />
							</span>
						</div>
					</div>

					<div className="form-group">
						<div className="input-group input-group-sm">
							<span className="input-group-addon">Password</span>
							<input type="password" id="inputInfo" name="password3" className="form-control" />
							<span className="input-group-addon">
								<i className="fa fa-asterisk" />
							</span>
						</div>
					</div>

					<div className="form-group form-actions">
						<button type="submit" className="btn btn-sm btn-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
);
export default Info;
