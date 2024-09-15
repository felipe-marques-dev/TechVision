export function Logo(){
  const logo_atena = 'logo_atena.png';
  return (
    <a href="/"><img className="logo" src={`/images/${logo_atena}`} style={{width: "180px", minWidth: "180px", height: "auto"}}/></a>
  );
}