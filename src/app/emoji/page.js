import NavbarHeader from "../Coponent/navbar";

const { default: EmojiContext } = require("./emojiContext")


const EmojiContainer= ()=>{
    return (
        <>
          <NavbarHeader />
            <div className='container'>
        <EmojiContext />
        </div>
        </>
    )
}

export default EmojiContainer;