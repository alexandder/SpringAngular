package pl.example.repositories;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import pl.example.entities.Party;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class PartyRepository {

    @Autowired
    private SessionFactory sessionFactory;

    public List<Party> getAllRepositories() {
        return sessionFactory.getCurrentSession().createCriteria(Party.class).list();
    }

    public void addParty(String name) {
        Party party = new Party(name);
        sessionFactory.getCurrentSession().persist(party);
    }
}
