# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Menu.create([
  { name: 'Usuários', path: 'usuarios', icon: 'las la-user' },
  { name: 'Pessoas', path: 'pessoas', icon: 'las la-user' },
  { name: 'Taxas', path: 'taxas', icon: 'las la-user' },
  { name: 'Tabelas de Preço', path: 'precos', icon: 'las la-user' },
  { name: 'Categorias', path: 'categorias', icon: 'las la-tags' },
  { name: 'Contas', path: 'contas', icon: 'las la-user' },
  { name: 'Produtos', path: 'produtos', icon: 'las la-boxes' },
  { name: 'Compras', path: 'compras', icon: 'las la-shopping-basket' },
  { name: 'Vendas', path: 'vendas', icon: 'las la-shopping-cart' },
  { name: 'Estoques', path: 'estoques', icon: 'las la-shopping-cart' },
  { name: 'Meios de Pagamento', path: 'modo-pagamento', icon: 'las la-user' },
  { name: 'Pagamentos', path: 'pagamentos', icon: 'las la-shopping-cart' },
  { name: 'Recebimentos', path: 'recebimentos', icon: 'las la-shopping-cart' },
  { name: 'Caixa', path: 'caixa', icon: 'las la-shopping-cart' }
])

User.create(name: 'Administrador', email: 'joaoser222@gmail.com', password: '32354633',password_confirmation: '32354633')