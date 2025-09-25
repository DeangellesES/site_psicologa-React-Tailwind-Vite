import simPsicologia from "./assets/simbolo.png"

function Cabecalho() {
    return (
        <header className="flex justify-between items-center p-6 pr-15 bg-yellow-50 border-b-1 shadow-md fixed w-full">
            <div className="flex w-14 h-15 items-center gap-4">
                <img className="w-14" src={simPsicologia}/>
                <h1 className="text-3xl text-blue-900">Patrícia Pisicóloga</h1>
            </div>
            <nav>
                <ul className="flex gap-8">
                    <li className="text-cyan-900 text-2xl">Home</li>
                    <li className="text-cyan-900 text-2xl">Sobre mim</li>
                </ul>
            </nav>
        </header>
    )
}

export default Cabecalho