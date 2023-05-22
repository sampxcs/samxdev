import Hero from '@/components/Sections/Hero'

export default function CategoriesLayout ({ children }: any) {
  return (
    <div>
      <Hero
        title='Articulos por Categorias'
      />
      {children}
    </div>
  )
}
