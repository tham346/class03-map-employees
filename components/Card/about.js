import { Unbounded } from "@next/font/google";

export default function Card ({
    name="none",
    email="none",
    font="0",
    fontColour="white",
    colourInfo="none"
    
}) {
    return (
        
        <div style={{
            borderStyle: "solid",
            borderRadius: "20px", 
            fontSize: font,
            color: fontColour,
            width: "600px",
            display: "flex",
            alignItems:"center",
            padding: "20px",
            margin: "20px",
        }}>
            
            <div style={{
                marginRight: "50px",
                marginLeft: "10px"
            }}>
                
                {
                    name === "Narumi Momose" ? <img src={"icon/narumi.jpeg"} width="180px"/>:
                    name === "Hanako Koyanagi" ? <img src={'.../icon/hanako.png'}/>:
                    name === "Hirotaka Nifuji" ? <img src={'icon/hirotaka.jpeg'} width="180px"/>:
                    name === "Tarō Kabakura" ? <img src={'icon/taro.jpeg'} width="180px"/> :
                    <img src={image}/>
                }
            </div>
            <div style={{
                backgroundColor: colourInfo,
                width: "300px",
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",

            }}>
                <div style={{
                    padding: "10px",
                    width: "100%",
                    textAlign: "center",
                    color: "#1e3863",
                    
                }}>

                    {name}

                </div>

                <div style={{
                    padding: "10px",
                    textAlign: "left",
                    width: "100%"
                }}>

                </div>

                <div style={{
                    padding: "10px",
                    width: "100%",
                    textAlign: "left"
                }}>

                    {email}

                </div>
            </div>   
        </div>
    )
}