import Hero from '@/components/Sections/Hero'

export default function CategoriesLayout ({ children }: any) {
  return (
    <div>
      <Hero
        header='Hola Mundo!'
        title='Articulos por Categorías'
        description='Navega por las diferentes dimensiones del contenido, explora las Categorías y déjate llevar por un mundo lleno de ideas, información y entretenimiento.'
      />
      {children}
    </div>
  )
}
