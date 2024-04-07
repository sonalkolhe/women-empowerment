import Table from './../material/Table.jsx'
import {getQuickReport} from './../apiFeatures.js'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = function ({el}) {
    const [quickReport, setQuickReport] = useState([]);

    useEffect(() => {
        async function init () {
            const quickReport = await getQuickReport();
            if(quickReport.status === 'success') setQuickReport(quickReport.data);
            else alert('failed to fetch the data!!');
        }
        init();
    }, []);

    return (
        <div>
            <div className="flex">
                <Sidebar />
                {
                    el==='dash' ?
                    <Content /> :
                    <Table data={quickReport}/>
                }
            </div>
        </div>
    )
};

export const Sidebar = function () {
    return (
        <div className="sidebar h-screen w-52 bg-slate-900 w-[15vw]">
            <div className="my-10 flex flex-col gap-5">
                <div className="select mx-5 rounded-xl border-b border-gray-500 p-2 text-white hover:bg-slate-600">
                    <button>Dashboard</button>
                </div>
                <div className="mx-5 rounded-xl border-b border-gray-500 p-2 text-white hover:bg-slate-600">
                    <button>Settings</button>
                </div>
                <div className="mx-5 rounded-xl border-b border-gray-500 p-2 text-white hover:bg-slate-600">
                    <button>Quick Report</button>
                </div>
                <div className="mx-5 rounded-xl border-b border-gray-500 p-2 text-white hover:bg-slate-600">
                    <button>Post Report</button>
                </div>
                <div className="mx-5 rounded-xl border-b border-gray-500 p-2 text-white hover:bg-slate-600">
                    <button>Posts Controller</button>
                </div>
            </div>
        </div>
    );
};

function Content() {
    return (
        <div class="my-20">
            <div class="flex w-[85vw] justify-around">
                <Link to='/quickReport' class="w-52 bg-blue-100 text-center py-10 rounded-md">Check Quick Report</Link>
                <Link to='/quickReport' class="w-52 bg-blue-100 text-center py-10 rounded-md">Check Descriptive Report</Link>
            </div>
        </div>
    );
};

export default Dashboard;
