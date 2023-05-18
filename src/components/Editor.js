import { useEffect, useState } from "react";
import { convert } from 'html-to-text'
import parse from 'html-react-parser'
function Editor() {
    const myText = '<h1 id="welcome - to - my - react - markdown - previewer">Welcome to my React Markdown Previewer!</h1>    <h2 id = "this-is-a-sub-heading" > This is a sub - heading...</h2 > <h3 id="and-heres-some-other-cool-stuff">And here\'s some other cool stuff:</h3><p>Heres some code, <code>&lt;div&gt;&lt;/div&gt;</code>, between 2 backticks.</p> <pre><code><span class="token comment">// this is multi-line code:</span><span class="token keyword">function</span> <span class="token function">anotherExample</span><span class="token punctuation">(</span><span class="token parameter">firstLine<span class="token punctuation">,</span> lastLine</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">if</span> <span class="token punctuation">(</span>firstLine <span class="token operator">==</span> <span class="token string">\'\`\`\`\'</span> <span class="token operator">&amp;&amp;</span> lastLine <span class="token operator">==</span> <span class="token string">\'\`\`\`\'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token keyword">return</span> multiLineCode<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>        </code></pre>        <p>You can also make text <strong>bold</strong>... whoa!<br />Or <em>italic</em>.<br />Or... wait for it... <strong><em>both!</em></strong><br />And feel free to go crazy <del>crossing stuff out</del>.</p>        <p>There\'s also <a target="_blank" rel="noreferrer" href="https://www.freecodecamp.org">links</a>, and</p>        <blockquote>            <p>Block Quotes!</p>        </blockquote>        <p>And if you want to get really crazy, even tables:</p>        <table>            <thead>                <tr>                    <th>Wild Header</th>                    <th>Crazy Header</th>                    <th>Another Header?</th>                </tr>            </thead>            <tbody><tr>                <td>Your content can</td>                <td>be here, and it</td>                <td>can be here....</td>            </tr>                <tr>                    <td>And here.</td>                    <td>Okay.</td>                    <td>I think we get it.</td>                </tr>            </tbody></table>        <ul>            <li>And of course there are lists.<ul>                <li>Some are bulleted.<ul>                    <li>With different indentation levels.<ul>                        <li>That look like this.</li>                    </ul>                    </li>                </ul>                </li>            </ul>            </li>        </ul>        <ol>            <li>And there are numbered lists too.</li>            <li>Use just 1s if you want!</li>            <li>And last but not least, let\'s not forget embedded images:</li>        </ol>        <p><img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg" alt="freeCodeCamp Logo" /></p>'

    const newText = convert(myText)

    const [text, setText] = useState(newText)
    useEffect(() => {

        setText(myText)
    }, [])
    const handleChange = (event) => {
        setText(event.target.value)
    }

    return <>
        <div className="mx-auto w-1/2">  <textarea className="w-100" cols="100" rows="10" id="editor" onChange={handleChange}>
            {text}
        </textarea></div>
        <div id="preview" className="w-2/3 mx-auto">{parse(text)}</div>
    </>
}
export default Editor;
