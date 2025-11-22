up:
	docker-compose up --build frontend backend


down:
	docker-compose down

logs:
	docker-compose logs -f

rebuild
	docker-compose down
	docker-compose up --build frontend backend
