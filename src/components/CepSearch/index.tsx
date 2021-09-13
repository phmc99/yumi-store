import { useLocalizaCep } from "../../providers/CepProvider"

export const CepCard = () => {

    const { ceps, cepNumber, setCepNumber, handleSearch } = useLocalizaCep()
        
    return (
        <div>
            <input placeholder="cep:" onChange={evt => setCepNumber(evt.target.value)} />
            <button disabled={!cepNumber} onClick={() => handleSearch(cepNumber)}> Buscar </button>
         
            {ceps.map((cep, index) => {
                return (
                <div key={index}>
                    <h4>Logradouro: {cep.logradouro}</h4>
                    <h4>Cep: {cep.cep}</h4>
                    <h4>Estado: {cep.uf}</h4>
                    <h4>Cidade: {cep.localidade}</h4>
                    <h4>Bairro: {cep.bairro}</h4>
                    <input placeholder="logradouro:" value={cep.logradouro}/>
                    <input placeholder="Cidade:" value={cep.localidade}/>
                    <input placeholder="Estado:" value={cep.uf}/>
                    <input placeholder="bairro:"value={cep.bairro}/>
                </div>
                )
            })}
            </div>
    )
}