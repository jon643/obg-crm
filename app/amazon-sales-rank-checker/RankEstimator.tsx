'use client'

import { useState } from 'react'

const CATEGORIES: { name: string; a: number }[] = [
  { name: 'Home & Kitchen', a: 95000 },
  { name: 'Beauty & Personal Care', a: 78000 },
  { name: 'Health & Household', a: 85000 },
  { name: 'Toys & Games', a: 60000 },
  { name: 'Electronics', a: 72000 },
  { name: 'Clothing, Shoes & Jewelry', a: 70000 },
  { name: 'Sports & Outdoors', a: 52000 },
  { name: 'Pet Supplies', a: 56000 },
  { name: 'Grocery & Gourmet Food', a: 64000 },
  { name: 'Kitchen & Dining', a: 68000 },
  { name: 'Office Products', a: 42000 },
  { name: 'Baby', a: 45000 },
  { name: 'Tools & Home Improvement', a: 50000 },
  { name: 'Patio, Lawn & Garden', a: 44000 },
  { name: 'Arts, Crafts & Sewing', a: 34000 },
  { name: 'Automotive', a: 32000 },
  { name: 'Industrial & Scientific', a: 22000 },
  { name: 'Appliances', a: 15000 },
]

const EXPONENT = 0.65

export default function RankEstimator() {
  const [bsrInput, setBsrInput] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0].name)

  const rank = parseInt(bsrInput.replace(/[^0-9]/g, ''), 10)
  const cat = CATEGORIES.find((c) => c.name === category)

  let estimate: number | null = null
  if (cat && !isNaN(rank) && rank > 0) {
    estimate = cat.a * Math.pow(rank, -EXPONENT)
  }
  const low = estimate !== null ? Math.max(1, Math.round(estimate * 0.7)) : null
  const high = estimate !== null ? Math.round(estimate * 1.3) : null

  return (
    <div className="rounded-2xl bg-obg-blue border border-obg-blue-light/20 p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div>
          <label htmlFor="bsr" className="block text-obg-gray text-sm font-semibold mb-2">
            Best Sellers Rank (BSR)
          </label>
          <input
            id="bsr"
            type="text"
            inputMode="numeric"
            placeholder="e.g. 12500"
            value={bsrInput}
            onChange={(e) => setBsrInput(e.target.value)}
            className="w-full rounded-lg bg-obg-blue-darker border border-obg-blue-light/30 px-4 py-3 text-white placeholder:text-obg-gray/50 focus:outline-none focus:border-obg-orange"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-obg-gray text-sm font-semibold mb-2">
            Amazon category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg bg-obg-blue-darker border border-obg-blue-light/30 px-4 py-3 text-white focus:outline-none focus:border-obg-orange"
          >
            {CATEGORIES.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {estimate !== null && low !== null && high !== null ? (
        <div className="rounded-xl bg-obg-blue-darker border border-obg-orange/30 p-6 text-center">
          <p className="text-obg-gray text-sm uppercase tracking-widest mb-2">Estimated monthly sales</p>
          <p className="text-white text-3xl font-bold">
            {low.toLocaleString()} - {high.toLocaleString()} units/month
          </p>
          <p className="text-obg-gray text-sm mt-3">
            Midpoint of roughly {Math.round(estimate).toLocaleString()} units. Estimates are modeled from public BSR-to-sales curves and vary with seasonality, price, and competition.
          </p>
        </div>
      ) : (
        <div className="rounded-xl bg-obg-blue-darker border border-obg-blue-light/20 p-6 text-center">
          <p className="text-obg-gray">Enter a BSR and pick a category to estimate monthly sales.</p>
        </div>
      )}
    </div>
  )
}
