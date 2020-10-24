import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default function() {
    return axios.get("https://randomuser.me/api/?results=200&?inc=picture,name,phone,email,dob");
  }




// 