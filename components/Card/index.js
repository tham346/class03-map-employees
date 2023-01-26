export default function Card ({
    degree="none",
    gpa="0",
    colourCard="none",
    colourInfo="none",
    fontColour="white",
    font="0",
}) {
    return (
        <div style={{
            backgroundColor: colourCard, 
            fontSize: font,
            color: fontColour,
            display: "flex",
            alignItems:"center",
            width: "500px",
            padding: "20px",
            margin: "20px",
        }}>
            <div style={{
                marginRight: "40px",
                marginLeft: "10px",
            }}>
                {
                    gpa <= "3.5" ? 
                    <img src={"icon/narumicon.png"} width='70'/>:
                    gpa > "3.8" ? 
                    <img src={"icon/hirotakaicon.png"} width='75'/>:
                    gpa <= "3.8" ? 
                    <img src={"icon/taroicon.png"} width='85'/>:
                    <img src={image} width='70'/>
                }
            </div>

            <div style={{
                backgroundColor: colourInfo,
                borderRadius: "10px",
                padding: "20px",
                paddingLeft: "10px",
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                width: "480px"
            }}>
                <div style={{
                    padding: "10px",
                    marginBottom: "10px",
                    backgroundColor: "#1e3863",
                    textAlign: "center",
                }}>
                    {degree}
                </div>
                <div style={{
                    marginLeft: "20px",
                    textAlign: "center"
                }}>
                    GPA: {gpa}
                </div>
            </div>
        </div>
    )
}