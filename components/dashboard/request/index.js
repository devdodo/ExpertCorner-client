import Aside from "../aside";
import Header from "../header";
import RequestForm from "../requestForm";
import RequestTable from "../requestTable";

const Request = ({ user, index }) => {
  return (
    <div className=" w-full h-full bg-gray-100">
      <div className="flex">
        <div className="aside">
          <Aside index={index} />
        </div>
        <div className="main-body w-[100%] h-[100%] md:ml-72 ">
          <Header user={user} />
          <div className="pt-20">
            <div className="w-[90%] sm:w-[80%] mt-9 mx-auto">
              <h1 className="text-3xl text-gray-700 font-bold">
                Place a Request
              </h1>
            </div>
            <RequestForm />
            <div className="w-[90%] sm:w-[80%] mt-9 mx-auto">
              <h1 className="text-xl text-gray-700 font-bold">
                Recent Requests
              </h1>
            </div>
            <RequestTable user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
