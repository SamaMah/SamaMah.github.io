---
layout: default
---

<section class="intro-banner">
  <div class="intro-container">
    <div class="intro-image-container">
      <img src="/assets/banner.png" alt="Banner Image" class="intro-image">
    </div>
    <p class="intro-skills">Digital Art <span class="divider">|</span> Design <span class="divider">|</span> Illustration</p>
  </div>
</section>


<section class="thumb-grid">
{%- assign default_paths = site.pages | map: "path" -%}
{%- assign page_paths = site.header_pages | default: default_paths -%}
{%- assign my_pages = site.pages | where_exp: "page", "page_paths contains page.path" -%}
{%- assign sorted_pages = my_pages | sort: "order" -%}
  <div class="thumb-container">
    {%- for my_page in sorted_pages -%}
      {%- if my_page.thumbnail and my_page.title -%}
        <a href="{{ my_page.url | relative_url }}" class="thumb-card">
          <img src="{{ my_page.thumbnail | relative_url }}" alt="{{ my_page.title | escape }}">
          <div class="thumb-title">{{ my_page.title }}</div>
        </a>
      {%- endif -%}
    {%- endfor -%}
  </div>
</section>
