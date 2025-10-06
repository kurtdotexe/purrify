import { ProductVariationsGrid } from '@/components/variations/product-variations-grid';
import { LimitedEditionCaps } from '@/components/variations/limited-edition-caps';
import { RefillSection } from '@/components/variations/refill-section';

export const metadata = {
  title: 'Product Variations - Purrify Stain Remover',
  description: 'Explore our 6 delightful Purrify variations with unique scents and colors. Plus learn about our eco-friendly refill system.',
};

export default function VariationsPage() {
  return (
    <div className="pt-16">
      <ProductVariationsGrid />
      <LimitedEditionCaps />
      <RefillSection />
    </div>
  );
}
