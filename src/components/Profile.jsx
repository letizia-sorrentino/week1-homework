//import React from 'react';
// const Profile = (props) => {
//   const { firstName, img, phone, email } = props;
//  console.log(props);
//   return (
//     <div className="profile-card">
//       <h2>{firstName}</h2>
//       <img className="profile-image" src={img} alt="profile-img" />
//       <p>Phone: {phone}</p>
//       <p>Email: {email}</p>
//     </div>
//   );
// };

// export default Profile;

import React, { Component } from 'react';
class Profile extends Component {
 
  render() { 
    console.log(this.props);
    return (<div className="profile-card">
          <h2>{this.props.firstName}</h2>
           <img className="profile-image" src={this.props.img} alt="profile-img" />
           <p>Phone: {this.props.phone}</p>
           <p>Email: {this.props.email}</p>
         </div>);
  }
}
export default Profile;