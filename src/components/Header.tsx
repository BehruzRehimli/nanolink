import { Button } from 'antd'

const Header = () => {
    return (
        <Button type="text">
            <div className="d-flex gap-3 ">
                <svg className="mt-2" width="18.67" height="14" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3334 8H1.66669M1.66669 8L8.66669 15M1.66669 8L8.66669 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div>
                    <h2 className='header-text'>FIG ARTISTIC GYMNASTICS WORLD CUP</h2>
                    <div className="d-flex align-items-center g-3 mt-2 flex-wrap bottom-text-header">
                        <p className="color-second fs-20 ffp" >Doha, Qatar</p>
                        <svg width="1" height="24" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="24" x2="0.499999" y2="2.18557e-08" stroke="#F2F2F2" />
                        </svg>
                        <p className="color-second fs-20 ffp">12/03/2023 - 13/02/2023</p>
                    </div>
                </div>

            </div>
        </Button>
    )
}

export default Header