import React from "react";
import "./UserName.css";
function UserName({id, name, status, species, lastLoc, origin, image}) {
	return (
		<div key={id} className="cont">
			<article>
				<div className="imgBox">
					<img src={image} alt=""></img>
				</div>
				<div className="contInfo">
					<div>
						<h2>{name}</h2>
						<h6>{status} - {species}</h6>
					</div>
					<div>
						<span>Last known location:</span>
						<h6>{lastLoc}</h6>
					</div>
					<div>
						<span>Origin:</span>
						<h6>{origin}</h6>
					</div>
				</div>
			</article> 
		</div>
	);
}
// {user.name} {user.status}
export default UserName;