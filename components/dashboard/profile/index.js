import Aside from "../aside";
import Header from "../header";
import EditForm from "../editForm";

const EditProfile = ({ user, index }) => {
  return (
    <div className=" w-full h-[100%] md:h-screen bg-gray-100">
      <div className="flex">
        <div className="aside">
          <Aside index={index} />
        </div>
        <div className="main-body w-[100%] h-[100%] md:ml-72 ">
          <Header user={user} />
          <div className="pt-20">
            <div className="w-[90%] sm:w-[80%] mt-9 mx-auto">
              <h1 className="text-3xl text-gray-700 font-bold">Edit Profile</h1>
            </div>
            <EditForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
