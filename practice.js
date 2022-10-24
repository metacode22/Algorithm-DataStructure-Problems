function solution(tickets) {
  const result = [];

  const _DFS = (current, tickets, path) => {
    if (tickets.length === 0) {
      result.push(path);
    } else {
      tickets.forEach((ticket, index) => {
        if (ticket[0] === current) {
          const newTickets = [...tickets];
          const next = ticket[1];
          newTickets.splice(index, 1);
          _DFS(next, newTickets, [...path, next]);
        }
      });
    }
  };

  _DFS('ICN', tickets, ['ICN']);
  return result.sort()[0];
}
