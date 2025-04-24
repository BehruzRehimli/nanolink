import { Button } from 'antd'

const Tabs = ({ tab, setTab }: { tab: number, setTab: Function }) => {
    return (
        <div className='d-flex align-items-center mt-5 tab-box' >
            <Button type='text' onClick={() => setTab(1)} className={`tab ${tab == 1 && "active"} d-flex gap-2 ffp align-items-center`}>
                <span style={{ backgroundColor: "#FB0000", height:6, width:6, borderRadius:"50%" }}></span>
                <span>Live</span>
            </Button>
            <Button type='text' onClick={() => setTab(2)} className={`tab ${tab == 2 && "active"} d-flex gap-2`}>
                Startlist
            </Button>
            <Button type='text' onClick={() => setTab(3)} className={`tab ${tab == 3 && "active"} d-flex gap-2`}>
                Schedule
            </Button>
            <Button type='text' onClick={() => setTab(4)} className={`tab ${tab == 4 && "active"} d-flex gap-2`}>
                Results
            </Button>
            <Button type='text' onClick={() => setTab(5)} className={`tab ${tab == 5 && "active"} d-flex gap-2`}>
                Medals
            </Button>
        </div>
    )
}

export default Tabs