package pl.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import pl.example.entities.Party;
import pl.example.repositories.PartyRepository;

import java.util.List;
import java.util.logging.Logger;
import java.util.stream.Collectors;

@Controller(value = "/api")
public class PartyController {

    private static Logger logger = Logger.getLogger("partyController");

    @Autowired
    private PartyRepository partyRepository;

    @RequestMapping(value = "party/all", method = RequestMethod.GET)
    public @ResponseBody List<String> getAllParties() {
        List<Party> parties = partyRepository.getAllRepositories();
        return parties.stream().map(party -> party.getName()).collect(Collectors.toList());
    }

    @RequestMapping(value = "party/vote/{partyName}", method = RequestMethod.GET, produces="text/plain")
    public @ResponseBody String vote(@PathVariable String partyName) {
        logger.info(partyName);
        if (partyName.endsWith("KORWiN")) {
            return "korwin";
        }
        else {
            return "kukiz";
        }
    }
}
