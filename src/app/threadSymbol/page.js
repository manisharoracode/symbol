"use client"
import SymbolContent from "./content";
// import EmojiList from "./Symbol/EmojiList"


const ThreadSymbol = () => {
   const symbolList = [
      ' 〵(^ o ^)〴', '(•`益´•)', '(ꈍ‿ꈍ)', '(╯︿╰)', '( ͡ӫ ³ ͡ӫ)つ🌹', '(‿!‿) ԅ(≖ڡ ≖ԅ)', '(˵´•‿•`˵ ⑅)', '(╯д╰)', '(๏ᆺ๏υ)', '╲〘♥‿♥〙〴', '╚(″⚈ᴗ⚈)╗', '┴┬┴|_•`)', '(ಠ_ಠ)', '(ಠ_ಠ)', '♥Lᵒᵛᵉᵧₒᵤ(′◡‵๑)', '(⚆_⚆)', '(ఠꍓఠ)', '(⚈ᴥ⚈)', 'Σd(˘‿˘๑)', '( ≖౪≖ )凸', '(∩ ⌣̀‸⌣́)', '⠒̫⃝*｡೨⋆*✩', '✯ℋᵅᵖᵖᵞ ℬⁱʳᵗᑋᵈᵃᵞ✯', '(๑꒡ᴗ꒡๑)', '(◍Ő◡Ő)💅🏻', '( ≚ᄌ≚ )>⌐■-■', '─=≡Σᕕ(⩺ω⩹)ᕗ', '(∶__∶)', '___〆(´•‿‿•`)', '(◣◞◢ )', 'd(◎˽◎)b', '(⚆ ̫ ⚆)', 'ヘ(꒪ཀ´꒪ヘ)', '__( ͡~ ͜ʖ ͡°)__', '( ◎ ﹏ ◎ )', '（ 人´•ꞈ•`)', '(-̀╯⌓╰-́)', '(-̀╯⌓╰-́)', '( ͝סּ ͜ʖ͡סּ)', 'O(ȏ ﻌ ȏ)O', '(⚈₋₍⚈)', '(⚈₋₍⚈)', '( ´•ᗨ•`)っ ♡', '(っ⇀__↼ ς)', '(◔_◔)', '(ɔˆ ³(ˆᴗˆ✿c)', '( ͝סּ ͜ʖ͡סּ)', '(っ´• ڡ •`ς)', '( • )( • )', '/|\⎠⎝( ;,;)⎠⎝/|\'', '(◡ _ ◡ ✿)', 'ᕦ(´•㇁•`)ᕤ', '〵(＾０＾)〴', '(❀´•‿•`❀)', '(ꈍoꈍ✿)', 'Ｈａｐｐｙ Ｂｉｒｔｈｄａｙ', '(〝^ω^)ノ', '♒((⇀╭╮↼))♒', '(¬ ºཀ´°)¬', '◥(◎ᵥᵥ◎)◤', '(✿ ꈍ‿ꈍ)', 'ψ(｀∇´)ψ', '(／⩾ ω＼)', '（//◉_◉//)', '｡◕ ᴗ ◕｡', '💤(｡-‿-｡)💤', '✽-(⩾∀⩽)/✽', '(ง •`⎽´•)ง', '(:˒ ▓▓', '( i_i)＼(^‿^ )', '（´﹏｀;）', '( ˘ڡ˘)', '(✖_✖)', 'ଘ(੭ˊᵕˋ)੭', '║█║▌║█║▌│║▌║▌█║', '(҂‾ ▵‾)︻デ═一 (˚▽˚’!)/', '╭∩╮（︶_︶）╭∩╮', '♪ﾟ+.ｏ(‘v`★)Α ｈαρρψ ηεｗ ψεαγ (★’v`)♪ﾟ+.ｏ', 'ϞϞ(๑⚈ ․̫ ⚈๑)∩', 'ᗒ෴ᗕ', '_(◉ ཀ ◉」∠)_', '( ●__●)', '٩(ˊ〇ˋ″)و', '┗(⩺ᆺ⩹ ;)┛', '(˘ʃƪ˘)', '𝓖𝓸𝓸𝓭 𝓜𝓸𝓻𝓷𝓲𝓷𝓰', '༼(⌐■ʖ̯■)༽', '(ꗞ _ ꗞ)', '(´•。•`｡)&gt;☕', '»-(¯`·.·´¯)-&gt;Text&lt;-(¯`·.·´¯)-«', '♡ᵗʱᵃᵑᵏઽ( ื▿ ืʃƪ)', 'ℒℴѵℯ(♥ω♥｡)', '✉︎(･ ⌣ ･✿)',
   ];

function handleSymbolClick(symbolItem) {
   navigator.clipboard.writeText(symbolItem);
}
return (
   <>
      <h1>More then 10000+ Text Faces for Threads App You Can Copy And Paste 〵(^ o ^)〴</h1>
      <div className="flex">
         {
            symbolList.map((symbolItem) => (<span key={symbolItem} className='symbol-size' onClick={() => handleSymbolClick(symbolItem)}>
               {symbolItem}
            </span>))
         }
      </div>
      <SymbolContent />

      {/* <div className="flex">
         {
            EmojiList.map((symbolItem) => (<span key={symbolItem} className='symbol-size' onClick={() => handleSymbolClick(symbolItem)}>
               {symbolItem}
            </span>))
         }
      </div> */}
   </>
)
}

export default ThreadSymbol;