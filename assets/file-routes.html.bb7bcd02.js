import{e as a}from"./app.01bff211.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},t=a(`<h1 id="\u6587\u4EF6\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u8DEF\u7531" aria-hidden="true">#</a> \u6587\u4EF6\u8DEF\u7531</h1><h2 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h2><ol><li>\u5728 <code>app.vue</code> \u4E2D\u52A0\u5165 <code>NuxtPage</code></li></ol><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtPage</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ol start="2"><li>\u5728 <code>pages</code> \u4E0B\u7684\u9875\u9762\u90FD\u5C06\u88AB\u81EA\u52A8\u8DEF\u7531</li></ol><p>\u4F8B\u5982\uFF0C<code>/</code> \u9875\u9762\u53EA\u9700\u521B\u5EFA <code>pages/index.vue</code></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- pages/index.vue --&gt;</span>
<span class="token comment">&lt;!-- \u8DEF\u7531 / \u5C06\u6E32\u67D3 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span> default <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u53C8\u4F8B\u5982\uFF0C<code>/home</code> \u9875\u9762\u53EA\u9700\u521B\u5EFA <code>pages/home.vue</code></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- pages/home.vue --&gt;</span>
<span class="token comment">&lt;!-- \u8DEF\u7531 /home \u5C06\u6E32\u67D3 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span> home <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u518D\u4F8B\u5982\uFF0C<code>/about</code> \u9875\u9762\u53EA\u9700\u521B\u5EFA <code>pages/about.vue</code></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- pages/about.vue --&gt;</span>
<span class="token comment">&lt;!-- \u8DEF\u7531 /about \u5C06\u6E32\u67D3 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span> about <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h2 id="\u5D4C\u5957" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957" aria-hidden="true">#</a> \u5D4C\u5957</h2><p>\u5982\u679C\u9700\u8981\u5B50\u8DEF\u7531\uFF0C\u53EF\u4EE5\u624D\u7528\u76EE\u5F55\u5D4C\u5957\u7684\u65B9\u5F0F</p><p>\u4F8B\u5982\uFF0C<code>/user/details</code> \u9875\u9762\u53EA\u9700\u521B\u5EFA <code>pages/user/details.vue</code></p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- pages/user/details.vue --&gt;</span>
<span class="token comment">&lt;!-- \u8DEF\u7531 /user/details \u5C06\u6E32\u67D3 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span> user/details <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5F53\u7136\u4F60\u8FD8\u53EF\u4EE5\u521B\u5EFA <code>pages/user.vue</code> \u6765\u505A\u6210\u5D4C\u5957\u8DEF\u7531</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- pages/user.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    user
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtChild</span> <span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- \u5B50\u8DEF\u7531\u51FA\u53E3 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h2 id="\u52A8\u6001" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001" aria-hidden="true">#</a> \u52A8\u6001</h2><p>\u5982\u679C\u9700\u8981\u52A8\u6001\u8DEF\u7531\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>[param]</code> \u7684\u65B9\u5F0F</p><p>\u4F8B\u5982\uFF0C<code>/user/:id</code> \u9875\u9762\u53EA\u9700\u521B\u5EFA <code>/pages/user/[id].vue</code></p><p>\u540C\u65F6\u53EF\u4EE5\u901A\u8FC7 <code>$route.params.id</code> \u83B7\u53D6\u5230\u5177\u4F53\u7684\u53C2\u6570</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- pages/user/[id].vue --&gt;</span>
<span class="token comment">&lt;!-- \u8DEF\u7531 /user/:id \u5C06\u6E32\u67D3 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    user / {{ $route.params.id }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5F53\u7136\u7236\u8DEF\u7531\u4E5F\u53EF\u4EE5\u662F\u52A8\u6001\u7684</p><p>\u4F8B\u5982\uFF0C<code>/user-:group/:id</code> \u9875\u9762\u53EA\u9700\u521B\u5EFA <code>/pages/user-[group]/[id].vue</code></p><p>\u540C\u65F6\u53EF\u4EE5\u901A\u8FC7 <code>$route.params.group</code> \u83B7\u53D6\u5230\u5177\u4F53\u7684\u53C2\u6570</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- /pages/user-[group]/[id].vue --&gt;</span>
<span class="token comment">&lt;!-- \u8DEF\u7531 /user-:group/:id \u5C06\u6E32\u67D3 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    user-{{ $route.params.group }} / {{ $route.params.id }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h2 id="\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u822A" aria-hidden="true">#</a> \u5BFC\u822A</h2><p><code>NuxtLink</code> \u53EF\u4EE5\u7528\u6765\u5BFC\u822A</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- app.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u70B9\u51FB\u5C06\u8DF3\u8F6C\u5230 /about \u9875\u9762 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> to about <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NuxtLink</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5F53\u7136\u8FD8\u53EF\u4EE5\u8DF3\u8F6C\u5916\u94FE</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- app.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u70B9\u51FB\u5C06\u8DF3\u8F6C\u5230 \u767E\u5EA6 \u9875\u9762 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.baidu.com/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> to baidu <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NuxtLink</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><br><br><h2 id="\u5143\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u5143\u4FE1\u606F" aria-hidden="true">#</a> \u5143\u4FE1\u606F</h2><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <code>definePageMeta</code> \u8BBE\u7F6E\u5F53\u524D\u8DEF\u7531\u7684\u5143\u4FE1\u606F</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u5B9A\u4E49\u5143\u4FE1\u606F</span>
<span class="token function">definePageMeta</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u83B7\u53D6\u5F53\u524D\u8DEF\u7531</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u83B7\u53D6\u5143\u4FE1\u606F</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> meta <span class="token punctuation">}</span> <span class="token operator">=</span> route
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token function">toRaw</span><span class="token punctuation">(</span>meta<span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA { foo: &#39;bar&#39; }</span>
<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,42);function p(e,o){return t}var u=n(s,[["render",p]]);export{u as default};
