import { useLoaderData } from "react-router-dom";
import ProgramDetailsCard from "../Components/ProgramDetailsCard";
import { Helmet } from "react-helmet";

const AllProgram = () => {
    const allProgram = useLoaderData()
    return (
        <div className="min-h-screen my-20">
            <Helmet>
            <title>HelpTheFuture-All-Program</title>
            </Helmet>
            <div className="grid grid-cols-3 gap-5">
            {
                allProgram.map(program=><ProgramDetailsCard key={program._id} program={program}></ProgramDetailsCard>)
            }
            </div>
        </div>
    );
};

export default AllProgram;