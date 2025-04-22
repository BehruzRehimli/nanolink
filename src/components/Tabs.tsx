import { Button } from 'antd'

const Tabs = ({ tab, setTab }: { tab: number, setTab: Function }) => {
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <Button type='text' onClick={() => setTab(1)} className={`tab ${tab == 1 && "active"} d-flex gap-2 ffp`}>
                <span style={{ color: "#FB0000", fontSize: 30 }}>•</span>
                Live
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