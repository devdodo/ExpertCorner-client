import Aside from '../aside';
import Header from '../header';
import RequestBox from '../requestBox';
import { useRouter } from  'next/router';

const View = ({user, index}) => {
    const router = useRouter();
    const { id } = router.query;
    
    return(
        <div className=" w-full h-screen bg-gray-100">
            <div className="flex">
                <div className="aside">
                    <Aside index={index} />
                </div>
                <div className="main-body w-[100%] h-[100%] md:ml-72 ">
                    <Header user={user} />
                    <div className="pt-20">
                        <div className="w-[90%] sm:w-[80%] mt-9 mx-auto">
                            <h1 className="text-3xl text-gray-700 font-bold">Request #{id}</h1>
                        </div>
                        <RequestBox requestId={id} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View;