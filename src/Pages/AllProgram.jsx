import { useLoaderData } from "react-router-dom";
import ProgramDetailsCard from "../Components/ProgramDetailsCard";

const AllProgram = () => {
    const allProgram = useLoaderData()
    return (
        <div className="min-h-screen my-20">
            {
                allProgram.map(program=><ProgramDetailsCard key={program._id} program={program}></ProgramDetailsCard>)
            }
        </div>
    );
};

export default AllProgram;