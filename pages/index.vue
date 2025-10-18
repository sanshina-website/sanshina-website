<template>
  <div>
    <HeadLayout/>

    <header class="container header" >
      <div class="logo">
        <img :src="logoUrl" alt="Sanshina logo"/>
        <div>
          <div style="font-weight:800;font-size:22px">Sanshina</div>
          <div style="color:var(--muted);font-size:13px">Authorized Distributor — Electronics & Industrial Automation</div>
        </div>
      </div>
      <nav class="nav">
        <NuxtLink to="#home">Home</NuxtLink>
        <NuxtLink to="#about">About</NuxtLink>
        <NuxtLink to="#products">Products</NuxtLink>
        <NuxtLink to="#oems">OEMs</NuxtLink>
        <NuxtLink to="#contact">Contact</NuxtLink>
        <a class="cta" href="mailto:sanshina@sanshina.co.in">Request Quote</a>
      </nav>
    </header>

    <main id="home" class="container hero">
      <div>
        <h1>Genuine OEM electronic components — Global sourcing & fast shipping</h1>
        <p class="muted">Sanshina sources and supplies RoHS- and ISO-certified components with full traceability and lifetime support. Authorized OEMs and authorized distributors.</p>

        <div class="search-bar" role="search">
          <input v-model="query" @input="onInput" placeholder="Search parts, e.g. LM324, capacitor, connector" aria-label="Search parts">
          <button @click="clearSearch">Clear</button>
        </div>

        <div class="features" style="margin-top:18px">
          <div class="feature"><strong>Authorized OEMs</strong><p class="muted">STMicro, Analog Devices, TI and more</p></div>
          <div class="feature"><strong>Global Sourcing</strong><p class="muted">Mouser, Digi-Key, Arrow, Element14</p></div>
          <div class="feature"><strong>Traceability</strong><p class="muted">RoHS, ISO and batch trace docs</p></div>
          <div class="feature"><strong>Fast Logistics</strong><p class="muted">Insured shipping worldwide</p></div>
        </div>

        <section id="products" class="section">
          <h2>Search results ({{ filtered.length }})</h2>
          <div class="card-grid">
            <div v-for="p in filtered" :key="p.id" class="card">
              <strong>{{ p.name }}</strong>
              <div class="muted" style="margin-top:8px">{{ p.manufacturer }} • {{ p.category }}</div>
              <div style="margin-top:10px">Part #: <code>{{ p.part }}</code></div>
            </div>
            <div v-if="filtered.length===0" class="card">No matching parts found.</div>
          </div>
        </section>
      </div>

      <aside>
        <img :src="heroUrl" alt="Hero image" style="width:100%;border-radius:12px;box-shadow:0 16px 40px rgba(11,94,215,0.08)"/>
        <div class="card" style="margin-top:16px">
          <h4>Authorized OEMs</h4>
          <div class="oem-logos">
            <img src="/logos/st.svg" alt="ST"/>
            <img src="/logos/analog.svg" alt="Analog"/>
            <img src="/logos/ti.svg" alt="TI"/>
            <img src="/logos/minicircuits.svg" alt="Mini-Circuits"/>
          </div>
        </div>
      </aside>
    </main>

    <section id="about" class="container section">
      <h2>About Sanshina</h2>
      <div class="card" style="margin-top:12px">
        <p class="muted">Sanshina is an authorized distributor and procurement specialist for electronic components and industrial automation equipment. We provide secure sourcing, compliance documentation, and lifecycle support for projects of any scale.</p>
      </div>
    </section>

    <section id="oems" class="container section">
      <h2>OEMs & Partners</h2>
      <div class="card" style="margin-top:12px">
        <div class="oem-logos">
          <img src="/logos/mouser.svg" alt="Mouser"/>
          <img src="/logos/digikey.svg" alt="Digi-Key"/>
          <img src="/logos/element14.svg" alt="Element14"/>
          <img src="/logos/arrow.svg" alt="Arrow"/>
        </div>
      </div>
    </section>

    <section id="contact" class="container section">
      <h2>Contact</h2>
      <div class="card" style="margin-top:12px;padding:18px;display:flex;flex-direction:column;gap:8px">
        <div><strong>Email:</strong> <a href="mailto:sanshina@sanshina.co.in">sanshina@sanshina.co.in</a></div>
        <div><strong>Phone:</strong> (+852)3050-1811</div>
        <div><strong>Address:</strong> UNIT 1507C, 15/F EASTCORE 398 KWUN TONG ROAD, Kowloon, Hong Kong</div>
        <div style="margin-top:6px"><a class="cta" href="mailto:sanshina@sanshina.co.in">Request Quote</a></div>
      </div>
    </section>

    <footer class="footer container">
      ©2013 - 2025 Sanshina. Guangdong ICP No.2022048691
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const logoUrl = '/logo.png'
const heroUrl = '/hero.jpg'

const query = ref('')
const products = ref([])
const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return products.value.slice(0, 12)
  return products.value.filter(p => {
    return (
      p.name.toLowerCase().includes(q) ||
      p.part.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.manufacturer.toLowerCase().includes(q)
    )
  })
})

const loadProducts = async () => {
  try {
    const res = await fetch('/products.json')
    if (res.ok) products.value = await res.json()
    else products.value = []
  } catch (e) {
    products.value = []
  }
}

onMounted(() => loadProducts())

function onInput() {}
function clearSearch(){ query.value = '' }
</script>

<style scoped>
.muted{color:var(--muted)}
</style>
