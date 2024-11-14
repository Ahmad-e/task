
const Card=(props)=>{
    return(
        <div className="home_card">
            <img src={props.image} className="home_card_img" />
            <div className="right_section_card" >
                <div className="home_card_name" > {props.name} </div>
                <div className="home_card_name" > {props.slug} </div>
                
                <div>
                    <span className="color_item"> </span>
                    <span style={{ background: "#514FB2"}} className="color_item"> </span>
                    <span style={{ background: "#DBDE4C"}} className="color_item"> </span>
                    <span style={{ background: "#DBDE4C"}} className="color_item"> </span>
                </div>
            </div>

            <div className="left_section_card" >
                <button onClick={props.onClick} className='btn btn_style_2'> Lima </button>
            </div>

        </div>
    )  
}
export default Card