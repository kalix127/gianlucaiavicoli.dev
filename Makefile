COMPOSE_FILE=docker-compose.yml

.PHONY: all
all: build up

.PHONY: build
build:
	@echo "Building Docker images..."
	docker compose -f $(COMPOSE_FILE) build

.PHONY: upd
upd:
	@echo "Starting Docker containers..."
	docker compose -f $(COMPOSE_FILE) up -d

.PHONY: up
up:
	@echo "Starting Docker containers..."
	docker compose -f $(COMPOSE_FILE) up

.PHONY: down
down:
	@echo "Stopping and removing Docker containers..."
	docker compose -f $(COMPOSE_FILE) down

.PHONY: restart
restart: down up

.PHONY: logs
logs:
	@echo "Viewing logs..."
	docker compose -f $(COMPOSE_FILE) logs -f

.PHONY: stop
stop:
	@echo "Stopping Docker containers..."
	docker compose -f $(COMPOSE_FILE) stop

.PHONY: clean
clean:
	@echo "Cleaning up unused Docker resources..."
	docker compose -f $(COMPOSE_FILE) down --volumes --rmi all --remove-orphans
