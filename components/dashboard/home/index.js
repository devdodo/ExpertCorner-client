import Aside from '../aside';
import Header from '../header';
import Cards from '../cards';
import RequestTable from '../requestTable';

const Home = ({user, index}) => {
    return(
        <div className=" w-full h-screen bg-gray-100">
            <div className="flex">
                <div className="aside">
                    <Aside index={index} />
                </div>
                <div className="main-body w-[100%] md:ml-72">
                    <Header user={user}/>
                    <div>
                        <div className="w-[90%] sm:w-[80%] mt-9 mx-auto">
                            <h1 className="text-3xl text-gray-700 font-bold">Dashboard</h1>
                        </div>
                        <Cards />
                        <RequestTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;