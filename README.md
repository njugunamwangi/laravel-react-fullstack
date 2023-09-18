## About Project

Built with:

- [React JS](https://react.dev)
- [Laravel](https://laravel.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind UI Components](https://tailwindui.com)
- [Hero Icons](https://heroicons.com/)
- [Headless React](https://headlessui.com/)
- [Breeze Scaffolding](https://laravel.com/docs/10.x/starter-kits#laravel-breeze)

## Functionality
- Sign Up
- Sign In
- Users CRUD

## Application
- Pagination
![users.png](public%2Fusers.png)
- Toast message for success, warning and error

## Installation
- Clone the repository
```bash
git clone https://github.com/njugunamwangi/laravel-react-fullstack.git
```
- On the root of the directory, copy and paste .env.example onto .env and configure the database accordingly
- Install composer dependancies bu running composer install
 ```bash
composer install
```
- Install npm dependacies
```bash
npm install
```
- Navigate to the admin folder 
```bash
cd admin 
```
-  In the admin folder, copy and paste .env.example onto .env
- Install npm dependacies
```bash
npm install
```

- Navigate back to the root directory of the folder then migrate the database
```bash
php artisan migrate
```
- Generate laravel application key using (on the root directory)
```bash
php artisan key:generate
```
- Run laravel application using (root directory)
```bash
php artisan serve
```
- Run react application using (admin directory)
```bash
npm run dev
```

Navigate to http://localhost:3000 for the react app. Enjoy

## License

[MIT](https://choosealicense.com/licenses/mit/)
