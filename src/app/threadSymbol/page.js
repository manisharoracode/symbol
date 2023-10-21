
import { useState } from "react";
import SymbolContent from "./content";
import { GenderSymbols, HeartList, MusicSymbol, SimilyFaceEmoji, TechnicalSymbol, 
        ToolSymbol, strSymbols, symbolList,JapenseSymbol, JapenseHiranga,JapaneseKatakana, 
        JapaneseKawaliFaces, JapenseHappyEmoticons, JapaneseLoveEmoticons, JapaneseFlowerEmoticons, 
        JapaneseFlirtyEmoticons } from '../Coponent/Symbols';

const ThreadSymbol = () => {
function handleSymbolClick(symbolItem) {
   navigator.clipboard.writeText(symbolItem);
}
return (
   <>
   
          <div className="mt-5">
            <h1>More then 10000+ Text Faces for Threads App You Can Copy And Paste 〵(^ o ^)〴</h1>
            {
              symbolList.map((symbolItem) => (<span key={symbolItem} className='symbol-size' onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>
          <div className="">
            <h2></h2>
            {
              HeartList.map((symbolItem) => (<span key={symbolItem} className='symbol-size' onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>
          <div className="">
            <h2>Star Symbols</h2>
            {
              strSymbols.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>
          <div className="">
            <h2>Simly Faces Symbols</h2>
            {
              SimilyFaceEmoji.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>
          <div className="">
            <h2>Gender Symbols</h2>
            {
              GenderSymbols.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>
          <div className="">
            <h2>Technical Symbols</h2>
            {
              TechnicalSymbol.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>
          <div className="">
            <h2>Musical Symbols</h2>
            {
              MusicSymbol.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>
          <div className=''>
            <h2>Japanese Text symbols ツ</h2>
            {
              JapenseSymbol.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
            <p>You can copy and paste japanese character hiragana, katakana and kanji in single click copy and paster Japanese symbol to copy it to the clipboard & insert it to an any threads,instagram and facebook or any another bio pic.</p>
          </div>
          <div className=''>
            <h2>Japanese Hiragana Symbols</h2>
            {
              JapenseHiranga.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>
          <div className=''>
            <h2>Japanese Katakana Symbols</h2>
            {
              JapaneseKatakana.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>

          <div className=''>
            <h2>Japanese Kawai Faces</h2>
            {
              JapaneseKawaliFaces.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>
          <div className=''>
            <h2>(^人^) Happy Emoticons</h2>
            {
              JapenseHappyEmoticons.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>

          <div className=''>
            <h2>(´♡‿♡`) Love Emoticons</h2>
            {
              JapaneseLoveEmoticons.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>

          <div className=''>
            <h2>(◕ᴗ◕✿) Flower Emoticons</h2>
            {
              JapaneseFlowerEmoticons.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>

          <div className=''>
            <h2>(｡)(｡) Flirty Emoticons</h2>
            {
              JapaneseFlirtyEmoticons.map((symbolItem) => (<span key={symbolItem} className="symbol-size" onClick={() => handleSymbolClick(symbolItem)}>
                {symbolItem}
              </span>))
            }
          </div>
           <SymbolContent />
   </>
)
}

export default ThreadSymbol;
