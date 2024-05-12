import { useLoaderData } from "react-router-dom";
import ProgramDetailsCard from "../Components/ProgramDetailsCard";

const AllProgram = () => {
    const allProgram = useLoaderData()
    return (
        <div className="min-h-screen my-20">
            <div className="grid grid-cols-3 gap-5">
            {
                allProgram.map(program=><ProgramDetailsCard key={program._id} program={program}></ProgramDetailsCard>)
            }
            </div>
        </div>
    );
};

export default AllProgram;